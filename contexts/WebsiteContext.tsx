import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { WebsiteData, api, ApiError } from '@/lib/api';

interface WebsiteContextType {
  websiteData: WebsiteData | null;
  loading: boolean;
  error: string | null;
  refetchWebsiteData: () => Promise<void>;
}

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

interface WebsiteProviderProps {
  children: ReactNode;
  websiteId?: string;
}

export const WebsiteProvider: React.FC<WebsiteProviderProps> = ({
  children,
  websiteId = process.env.NEXT_PUBLIC_WEBSITE_ID || '',
}) => {
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWebsiteData = async () => {
    if (!websiteId) {
      setError('No website ID provided');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await api.getWebsiteData(websiteId);
      setWebsiteData(data);

      // Set document title if SEO data is available
      if (data.website?.name) {
        document.title = data.website.name;
      }

      // Set meta description if SEO data is available
      if (data.website?.seo?.metaDescription) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', data.website.seo.metaDescription);
        } else {
          const meta = document.createElement('meta');
          meta.name = 'description';
          meta.content = data.website.seo.metaDescription;
          document.head.appendChild(meta);
        }
      }
    } catch (err) {
      if (err instanceof ApiError) {
        setError(`Error ${err.status}: ${err.message}`);
      } else {
        setError('Failed to load website data. Please try again later.');
      }

      setWebsiteData(null);
    } finally {
      setLoading(false);
    }
  };

  const refetchWebsiteData = async () => {
    await fetchWebsiteData();
  };

  useEffect(() => {
    fetchWebsiteData();
  }, [websiteId]);

  const value: WebsiteContextType = {
    websiteData,
    loading,
    error,
    refetchWebsiteData,
  };

  return <WebsiteContext.Provider value={value}>{children}</WebsiteContext.Provider>;
};

// Custom hook to use website context
export const useWebsite = (): WebsiteContextType => {
  const context = useContext(WebsiteContext);

  if (context === undefined) {
    throw new Error('useWebsite must be used within a WebsiteProvider');
  }

  return context;
};

// Helper hooks for specific parts of the website data
export const useWebsiteInfo = () => {
  const { websiteData } = useWebsite();
  return websiteData?.website || null;
};

export const useHotelInfo = () => {
  const { websiteData } = useWebsite();
  return websiteData?.hotelInfo || null;
};

export const useRooms = () => {
  const { websiteData } = useWebsite();
  return websiteData?.rooms || [];
};

export const useHeroSections = () => {
  const { websiteData } = useWebsite();
  return websiteData?.heroSections || [];
};

export const useOurStory = () => {
  const { websiteData } = useWebsite();
  return websiteData?.ourStory || null;
};

export const useFacilities = () => {
  const { websiteData } = useWebsite();
  return websiteData?.facilities || [];
};

export const useReviews = () => {
  const { websiteData } = useWebsite();
  return websiteData?.reviews || [];
};

export const useSiteSettings = () => {
  const { websiteData } = useWebsite();
  return websiteData?.siteSettings || null;
};

export const useOffer = () => {
  const { websiteData } = useWebsite();
  return websiteData?.offer || null;
};

export const useMeeting = () => {
  const { websiteData } = useWebsite();
  return websiteData?.meeting || null;
};

export const useWebsiteStats = () => {
  const { websiteData } = useWebsite();

  if (!websiteData) {
    return {
      totalRooms: 0,
      totalFacilities: 0,
      averageRating: 0,
    };
  }

  return {
    totalRooms: websiteData.totalRooms,
    totalFacilities: websiteData.totalFacilities,
    averageRating: websiteData.averageRating,
  };
};
