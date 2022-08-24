import { useEffect, useState } from 'react'
import io from 'socket.io-client';
import type { GetStaticProps, NextPage } from 'next'

const server = 'https://prs.uat.api.xyphersolutionsinc.com'
// const server = 'http://localhost:5080'
const socket = io(server, {transports: ['websocket']})

const support = ({slots}: any) => {
  const [availSlot, setSlotAvail] = useState<number>(slots.data.slotsAvailable)
  // console.log('socket', socket)
  // console.log('slots', slots)
  socket.on("connection", (data) => {
    const engine = socket.io.engine;
    console.log(engine.transport.name);
    // console.log('data', data)
    // setSlotAvail(data.slots.slotsAvailable)
  })
  const handleAdd = () => {

  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h3>Available</h3>
        <p>{availSlot}</p>
      </div>
      <button></button>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async(context) => {
  // const res = await fetch("https://fakestoreapi.com/products/categories")
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDViNzIwMGEzZjQ2MWI3OTIwNmIxYiIsImlhdCI6MTY2MTMyOTQyMH0.ZxyeVu7XNzbZweiQ-HDVMo5NYXVGw_QR59ER8z3eSW4';
  // fetch('https://prs.uat.api.xyphersolutionsinc.com/dashboard/slots', { 
  //   method: 'get', 
  //   headers: {
  //     'Content-type': 'application/json',
  //     'Authorization': `Bearer ${token}`, // notice the Bearer before your token
  //   },
  // });
  const res = await fetch(`${server}/dashboard/slots`, { 
    method: 'get', 
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`, // notice the Bearer before your token
    },
  });
  // const res = await fetch("http://localhost:5080/dashboard/slots");
  const slots = await res.json()

  return {
    props: {
      slots,
    }
  }
}

export default support