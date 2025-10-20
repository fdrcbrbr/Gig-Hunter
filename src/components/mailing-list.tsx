"use client"
import { useState, FormEvent } from 'react';

export default function MailingList() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Subscription completed!');
      } else {
        setMessage('Error subscribing.');
      }
    } catch (error) {
      setMessage('Network error.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Insert your e-mail.."
        required
      />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
}