import React, { useEffect, useState } from 'react';

function RealTimeUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // Fetch real-time updates from the server
    const fetchUpdates = async () => {
      try {
        const response = await fetch('/api/realtime/updates');
        const data = await response.json();
        setUpdates(data);
      } catch (error) {
        console.error('Error fetching real-time updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <div>
      <h2>Real-time Updates</h2>
      {updates.map((update) => (
        <div key={update.id}>
          <h3>{update.title}</h3>
          <p>{update.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RealTimeUpdates;
