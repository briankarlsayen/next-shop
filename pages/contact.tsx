import React from 'react';
import Map from '../components/Map';
import MapBox from '../components/MapBox';

function contact() {
  return (
    <div className='py-20'>
      {/* <Map /> */}
      <MapBox />
      <div className='max-w-1/4 pt-12 text-center x-spacing flex flex-col gap-4'>
        <div>
          <h4 className='text-header py-2'>Ping us </h4>
          <p>
            Got any questions? We look forward to answering all your requests.
          </p>
        </div>
        <div>
          <p>Mail:</p>
          <p>
            Orders: <span>emailorder@gmail.com</span>
          </p>
          <p>
            General Inquiries: <span>customerinq@gmail.com</span>
          </p>
          <p>
            Service / Claims: <span>servicing@gmail.com</span>
          </p>
        </div>
        <div>
          <p>Phone:</p>
          <p>+631234567890</p>
        </div>
        <div>
          <p>Monday - Friday: 0800 - 1700</p>
          <p>Saturday: 0900 - 1630</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(contact);
