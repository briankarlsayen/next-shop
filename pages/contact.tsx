
import React from 'react'
import Map from '../components/Map'



function contact() {
  return <>
    <h2 className='title text-center py-12 x-spacing'>Contact Us</h2>
    <Map />
    <div className='max-w-1/4 pt-12 text-center x-spacing'>
      <p className='text-xl'>We are always keen to hear from people that would like to add a new perspectives to our team.</p>
      <div className='py-6'>
        <h4 className='text-header py-2'>Get in touch</h4>
        <p>Got any questions? We look forward to answering all your requests.</p>
        <p>Monday - Friday: 0800 - 1700</p>
        <p>Saturday: 0900 - 1630</p>
      </div>
      <div>
        <p>Email:</p>
        <p>Orders: <span>salesorder@gmail.com</span></p>
        <p>General Inquiries: <span>customerinq@gmail.com</span></p>
        <p>Service / Claims: <span>serviceclaim@gmail.com</span></p>
      </div>
      <div>
        <p>Phone:</p>
        <p>+631234567890</p>
      </div>
    </div>
    <div className='border-b-2 py-20'></div>
  </>
}

export default React.memo(contact)