// pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const createMeeting = async () => {
    const res = await axios.post('http://localhost:8000/api/create/', { name: username });
    navigate(`/meeting/${res.data.roomId}`);
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Create Meeting</h1>
      <input type="text" placeholder="Your name" value={username} onChange={e => setUsername(e.target.value)} className="border px-3 py-2" />
      <button onClick={createMeeting} className="ml-4 bg-blue-500 text-white px-4 py-2">Start</button>
    </div>
  );
}
