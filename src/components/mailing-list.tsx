"use client";
import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function MailingList() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage("Subscription completed!");
      } else {
        setMessage("Error subscribing.");
      }
    } catch (error) {
      setMessage("Network error.");
    }
  };

  return (
    <div className="bg-[color:var(--color-cream)] py-15">
      <div className="w-[90vw] mx-auto">
        <div className="flex mb-15 items-center justify-center relative">
          <div className="border-t-2 border-gray-600 w-full absolute"></div>
          <span className="bg-[color:var(--color-cream)] px-4 text-center text-xl font-medium text-gray-700 relative z-10">
            Mailing list
          </span>
        </div>
        <div className="h-[80vh] bg-[var(--color-cream)]">
          <div>
            <form className="flex justify-center" onSubmit={handleSubmit}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insert your e-mail.."
                required
                className="w-[60vh] text-black bg-neutral-100"
              />
              <Button
                className="text-neutral-100 border-neutral-100 ml-2"
                type="submit"
              >
                Subscribe
              </Button>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
        <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
      </div>
    </div>
  );
}
