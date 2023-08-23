import React from 'react';

function ComponentLoading() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div
        style={{ borderTopColor: 'transparent' }}
        className='w-5 h-5 border-4 border-blue-200 rounded-full animate-spin'
      ></div>
    </div>
  );
}

export default ComponentLoading;
