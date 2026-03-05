// Re-export all website-related hooks and types for easy importing
export {
  WebsiteProvider,
  useWebsite,
  useWebsiteInfo,
  useHotelInfo,
  useRooms,
  useHeroSections,
  useOurStory,
  useFacilities,
  useReviews,
  useSiteSettings,
  useWebsiteStats,
} from '@/contexts/WebsiteContext';

export type { WebsiteData, Room, HeroSection, Facility, Review, ApiResponse } from '@/lib/api';

export { ApiError } from '@/lib/api';
