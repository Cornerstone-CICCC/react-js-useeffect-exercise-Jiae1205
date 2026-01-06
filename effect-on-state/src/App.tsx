import { useState, useEffect } from 'react';

function App() {
  // 1. Message Logger
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      console.log('Message:', message);
    }
  }, [message]); // message가 바뀔 때마다 실행

  // 2. Like Counter
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]); // likes가 바뀔 때마다 실행

  // 3. Color Box
  const [color, setColor] = useState<'red' | 'blue'>('red');

  useEffect(() => {
    console.log('Current color:', color);
  }, [color]); // color가 바뀔 때마다 실행

  // 버튼 클릭 핸들러
  const handleSendMessage = () => setMessage('Hello from React!');
  const handleLike = () => setLikes(prev => prev + 1);
  const handleChangeColor = () =>
    setColor(prev => (prev === 'red' ? 'blue' : 'red'));

  return (
    <div style={{ padding: 20 }}>
      {/* Message Logger */}
      <h2>Message Logger</h2>
      <button onClick={handleSendMessage}>Send Message</button>

      {/* Like Counter */}
      <h2>Like Counter</h2>
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>

      {/* Color Box */}
      <h2>Color Box</h2>
      <button onClick={handleChangeColor}>Change Color</button>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          marginTop: 10,
        }}
      >
        Color Box
      </div>
    </div>
  );
}

export default App;
