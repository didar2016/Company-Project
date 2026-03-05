# Website Data Integration

This implementation provides a complete solution for fetching and managing website data from the backend API in your Company-Project frontend.

## 🚀 Features

- ✅ **Public API endpoint** for website details by ID
- ✅ **Global state management** using React Context
- ✅ **Type-safe API client** with error handling
- ✅ **Custom hooks** for easy data access
- ✅ **Loading and error states**
- ✅ **Automatic SEO updates** (title, meta description)

## 📁 Files Created/Modified

### Backend Changes

- **Modified**: `backend/src/controllers/websiteController.ts` - Enhanced public API with additional stats

### Frontend New Files

- **Created**: `lib/api.ts` - API client and TypeScript interfaces
- **Created**: `contexts/WebsiteContext.tsx` - React context and provider
- **Created**: `hooks/useWebsite.ts` - Custom hooks for easy access
- **Created**: `components/WebsiteLoader.tsx` - Loading/error wrapper
- **Created**: `components/ExampleWebsiteDataUsage.tsx` - Usage example

### Configuration Updates

- **Modified**: `pages/_app.tsx` - Added WebsiteProvider wrapper
- **Modified**: `.env` - Added proper environment variables

## 🔧 Environment Variables

Make sure your `.env` file contains:

```env
NEXT_PUBLIC_WEBSITE_ID=FNFGFN56S4HF5GH4F65HG4
WEBSITE_NAME=MENA_PLAZA
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 📖 Usage Examples

### Basic Usage in Any Component

```tsx
import { useWebsite, useRooms, useWebsiteInfo } from '@/hooks/useWebsite';

function MyComponent() {
  const { websiteData, loading, error } = useWebsite();
  const rooms = useRooms();
  const websiteInfo = useWebsiteInfo();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{websiteInfo?.name}</h1>
      <p>Available rooms: {rooms.length}</p>
    </div>
  );
}
```

### Available Hooks

- `useWebsite()` - Full website context with loading/error states
- `useWebsiteInfo()` - Basic website info (name, domain, theme, etc.)
- `useHotelInfo()` - Hotel-specific information
- `useRooms()` - Array of available rooms
- `useHeroSections()` - Hero sections for the homepage
- `useOurStory()` - About/story section data
- `useFacilities()` - Hotel facilities
- `useReviews()` - Customer reviews
- `useSiteSettings()` - Logo, footer settings
- `useWebsiteStats()` - Computed statistics (total rooms, avg rating, etc.)

### Using with Loading States

```tsx
import { WebsiteLoader } from '@/components/WebsiteLoader';

function SomePage() {
  return (
    <WebsiteLoader>
      <YourContent />
    </WebsiteLoader>
  );
}
```

## 🌐 API Endpoint

The backend provides this public endpoint:

```
GET /api/public/website/:uniqueId
```

**Response format:**

```json
{
  "success": true,
  "data": {
    "website": {
      /* basic website info */
    },
    "hotelInfo": {
      /* hotel details */
    },
    "rooms": [
      /* available rooms */
    ],
    "heroSections": [
      /* active hero sections */
    ],
    "ourStory": {
      /* about section */
    },
    "facilities": [
      /* hotel facilities */
    ],
    "reviews": [
      /* customer reviews */
    ],
    "siteSettings": {
      /* logos, footer */
    },
    "totalRooms": 10,
    "totalFacilities": 5,
    "averageRating": 4.5
  }
}
```

## 🎯 Integration Notes

1. **Automatic Loading**: Website data loads automatically when the app starts
2. **Global Access**: Any component can access the data without prop drilling
3. **Type Safety**: Full TypeScript support with interfaces
4. **Error Handling**: Graceful error handling with user feedback
5. **SEO Ready**: Automatically updates page title and meta description
6. **Caching**: Data is cached in context, only loads once per session

## 🔄 Refresh Data

To manually refresh the website data:

```tsx
const { refetchWebsiteData } = useWebsite();

// Call this function to reload data
await refetchWebsiteData();
```

Now your website data is available globally across all pages! 🎉
