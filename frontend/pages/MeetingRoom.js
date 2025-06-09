// pages/MeetingRoom.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MeetingRoom() {
  const { roomId } = useParams();

  useEffect(() => {
    // connect WebSocket + start WebRTC peer connection
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 bg-gray-100">Video Area (WebRTC)</div>
      <div className="bg-white border-t p-4">Chat + Controls</div>
    </div>
  );
}