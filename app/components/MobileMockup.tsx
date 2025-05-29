import React from 'react';
import { motion } from 'framer-motion';
import { PhotoIcon, PlusIcon } from '@heroicons/react/24/outline';

const MobileMockup = () => {
  return (
    <div className="relative w-[280px] h-[580px] mx-auto">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[40px] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] bg-gray-900 rounded-b-[20px] z-10" />
        
        {/* Screen */}
        <div className="absolute inset-[3px] bg-white rounded-[37px] overflow-hidden">
          {/* Status Bar */}
          <div className="h-12 bg-white flex items-center justify-between px-6">
            <div className="text-sm font-medium text-gray-900">9:41</div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">My Projects</h2>
              <button className="text-primary font-medium">+ New</button>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
              {/* Garden Landscaping Project */}
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex items-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900">Garden Landscaping</h3>
                    <p className="text-xs text-gray-500 mt-1">3 tasks • 2 estimates</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        Planning
                      </span>
                    </div>
                  </div>
                </div>
                {/* Tasks List */}
                <div className="mt-3 space-y-2 pl-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-primary rounded border-gray-300" />
                    <span className="text-sm text-gray-700 flex-1">Replace natural with artificial grass</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <PhotoIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-primary rounded border-gray-300" />
                    <span className="text-sm text-gray-700 flex-1">Trim 3 large trees in backyard</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <PhotoIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-primary rounded border-gray-300" />
                    <span className="text-sm text-gray-700 flex-1">Create stone pathway in garden</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <PhotoIcon className="h-4 w-4" />
                    </button>
                  </div>
                  {/* Add More Tasks Button */}
                  <button className="flex items-center space-x-1 text-sm text-primary mt-2">
                    <PlusIcon className="h-4 w-4" />
                    <span>Add more tasks</span>
                  </button>
                </div>
                {/* Send for Estimate Button */}
                <button className="w-full mt-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90">
                  Send for Estimate
                </button>
              </div>

              {/* Home Maintenance Project */}
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex items-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900">Home Maintenance</h3>
                    <p className="text-xs text-gray-500 mt-1">3 tasks • 1 estimate</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
                {/* Tasks List */}
                <div className="mt-3 space-y-2 pl-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-primary rounded border-gray-300" />
                    <span className="text-sm text-gray-700 flex-1">Replace tank water heater with tankless</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <PhotoIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-primary rounded border-gray-300" />
                    <span className="text-sm text-gray-700 flex-1">Add recess lights in all bedrooms</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <PhotoIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-primary rounded border-gray-300" />
                    <span className="text-sm text-gray-700 flex-1">Paint kids room</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <PhotoIcon className="h-4 w-4" />
                    </button>
                  </div>
                  {/* Add More Tasks Button */}
                  <button className="flex items-center space-x-1 text-sm text-primary mt-2">
                    <PlusIcon className="h-4 w-4" />
                    <span>Add more tasks</span>
                  </button>
                </div>
                {/* Send for Estimate Button */}
                <button className="w-full mt-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90">
                  Send for Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMockup; 