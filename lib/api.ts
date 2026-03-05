// API utility for fetching website data
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface WebsiteData {
  website: {
    uniqueId: string;
    name: string;
    domain: string;
    theme: any;
    settings: any;
    seo: any;
    isActive: boolean;
  };
  hotelInfo: any;
  rooms: Room[];
  heroSections: HeroSection[];
  ourStory: any;
  facilities: Facility[];
  reviews: Review[];
  siteSettings: any;
  totalRooms: number;
  totalFacilities: number;
  averageRating: number;
  offer: Offer;
  meeting: meeting;
}

export interface meeting {
  title: string;
  subtitle: string;
  available: boolean;
  image: string;
}

export interface Offer {
  title: string;
  subtitle: string;
  offer_available: boolean;
  offer_percentage: number;
  offer_image: string;
}

export interface Room {
  _id: string;
  name: string;
  description: string;
  maxOccupancy: number;
  bedType: string;
  size: number;
  basePrice: number;
  mainImage: string;
  discountPercentage?: string;
  discountPrice: number;
  detailImages: string[];
  images: string[];
  amenities: string[];
  features: string[];
  servicesIncluded: string[];
  isAvailable: boolean;
}

export interface HeroSection {
  _id: string;
  image: string;
  text: string;
  subText: string;
  detailsText: string;
  page: string;
  isActive: boolean;
}

export interface Facility {
  _id: string;
  image: string;
  title: string;
  subTitle: string;
}

export interface Review {
  _id: string;
  avatar: string;
  name: string;
  review: string;
  rating: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export { ApiError };

export const api = {
  async getWebsiteData(websiteId: string): Promise<WebsiteData> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/public/website/${websiteId}`);

      if (!response.ok) {
        throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse<WebsiteData> = await response.json();

      if (!result.success) {
        throw new ApiError(400, 'API returned unsuccessful response');
      }

      return result.data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      // Network or other errors
      throw new ApiError(
        500,
        `Failed to fetch website data: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  },

  async submitContactMessage(
    websiteId: string,
    data: { email: string; phone: string; message: string }
  ): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/public/website/${websiteId}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new ApiError(
          response.status,
          result.message || `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();
      if (!result.success) {
        throw new ApiError(400, result.message || 'Failed to send message');
      }
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  },
};
