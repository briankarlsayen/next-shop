import React from 'react';
import { Toaster } from 'react-hot-toast';

function ToasterComponent() {
  return (
    <Toaster
      position='top-center'
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: '14px',
        },
      }}
    />
  );
}

export default ToasterComponent;
