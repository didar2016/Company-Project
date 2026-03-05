import React from 'react';
import {
  useWebsiteInfo,
  useHotelInfo,
  useRooms,
  useWebsiteStats,
  useSiteSettings,
} from '@/hooks/useWebsite';

const ExampleWebsiteDataUsage: React.FC = () => {
  const websiteInfo = useWebsiteInfo();
  const hotelInfo = useHotelInfo();
  const rooms = useRooms();
  const stats = useWebsiteStats();
  const siteSettings = useSiteSettings();

  return (
    <div className="p-6 space-y-6">
      {/* Website Basic Info */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Website Information</h2>
        {websiteInfo && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Name:</strong> {websiteInfo.name}
            </div>
            <div>
              <strong>Domain:</strong> {websiteInfo.domain}
            </div>
            <div>
              <strong>Active:</strong> {websiteInfo.isActive ? 'Yes' : 'No'}
            </div>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="bg-blue-50 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.totalRooms}</div>
            <div className="text-gray-600">Available Rooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{stats.totalFacilities}</div>
            <div className="text-gray-600">Facilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">
              {stats.averageRating.toFixed(1)}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Hotel Info */}
      {hotelInfo && (
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Hotel Information</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {JSON.stringify(hotelInfo, null, 2)}
          </pre>
        </div>
      )}

      {/* Rooms Preview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Available Rooms ({rooms.length})</h2>
        <div className="grid gap-4">
          {rooms.slice(0, 3).map((room) => (
            <div key={room._id} className="border rounded p-4">
              <h3 className="font-bold">{room.name}</h3>
              <p className="text-gray-600">{room.description}</p>
              <div className="flex justify-between mt-2">
                <span className="text-green-600 font-bold">${room.basePrice}/night</span>
                <span className="text-blue-600">{room.maxOccupancy} guests max</span>
              </div>
            </div>
          ))}
          {rooms.length > 3 && (
            <div className="text-center text-gray-500">... and {rooms.length - 3} more rooms</div>
          )}
        </div>
      </div>

      {/* Site Settings */}
      {siteSettings && (
        <div className="bg-yellow-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Site Settings</h2>
          <div className="space-y-2">
            {siteSettings.logo && (
              <div>
                <strong>Logo:</strong> {siteSettings.logo}
              </div>
            )}
            {siteSettings.footerLogo && (
              <div>
                <strong>Footer Logo:</strong> {siteSettings.footerLogo}
              </div>
            )}
            {siteSettings.footerDescription && (
              <div>
                <strong>Footer Description:</strong> {siteSettings.footerDescription}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleWebsiteDataUsage;
