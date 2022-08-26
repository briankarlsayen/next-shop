import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client';
import type { GetStaticProps, NextPage } from 'next'
import {ServerToClientEvents, ClientToServerEvents, Slot} from '../types'
const server = 'https://prs.uat.api.xyphersolutionsinc.com'
// const server = 'http://localhost:5080'
// const socket = io(server, {transports: ['websocket']})

function useSocket(url:string) {
  const [socket, setSocket] = useState<Socket<ServerToClientEvents> | undefined>()

  useEffect(() => {
    const socketIo: Socket<ServerToClientEvents> = io(url, {transports: ['websocket']})
    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup
  }, [])

  return socket
}

const support = ({slots}: any) => {
  const [availSlot, setSlotAvail] = useState<number>(slots.data.slotsAvailable)

  const socket = useSocket(server)
  useEffect(() => {
    function handleEvent(prop: {slots:Slot}) {
      console.log('slots', prop.slots.bookingInSlot)
      setSlotAvail(prop.slots.slotsAvailable)
    }
    if (socket) {
      socket.on("update-slot", handleEvent)
    }
  }, [socket])

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
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDViNzIwMGEzZjQ2MWI3OTIwNmIxYiIsImlhdCI6MTY2MTMyOTQyMH0.ZxyeVu7XNzbZweiQ-HDVMo5NYXVGw_QR59ER8z3eSW4';
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