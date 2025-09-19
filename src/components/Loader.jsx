import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-[200]">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-500"></div>
  </div>
);

export default Loader;