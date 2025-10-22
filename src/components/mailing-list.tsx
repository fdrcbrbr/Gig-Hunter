"use client";
import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MicVocal, Drum, Guitar, Speaker } from "lucide-react";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Network error.");
    }
  };

  return (
    <div className="bg-[color:var(--color-cream)] py-12">
      <div className="w-[80vw] mx-auto">
        <div className="flex mb-15 items-center justify-center relative">
          <div className="border-t-2 border-gray-600 w-full absolute"></div>
          <span className="bg-[color:var(--color-cream)] px-4 text-center text-xl font-medium text-gray-700 relative z-10">
            Mailing list
          </span>
        </div>
        <div className="flex justify-center mb-8">
          <p className="text-center text-gray-700 text-xl max-w-[70ch]">
            Don&apos;t miss out on our events! Subscribe to our mailing list to stay updated with the latest news and exclusive offers.
          </p>
        </div>
        <div className="h-[50vh] bg-[var(--color-cream)] flex flex-col justify-start items-center pt-10">
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
          </form>
          {message && (
            <p className="mt-4 text-center text-gray-700">
              {message}
            </p>
          )}
          <div className="flex justify-center gap-30 mt-20">
            <Drum className="h-15 w-15 text-gray-700" />
            <MicVocal className="h-15 w-15 text-gray-700" />
            <Guitar className="h-15 w-15 text-gray-700" />
            <Speaker className="h-15 w-15 text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}