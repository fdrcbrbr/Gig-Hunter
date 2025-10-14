"use client";
export default function Backdrop({ children }: { children: React.ReactNode }) {
  const imageUrl = "/images/bg-header.jpg";
  const opacity = 50;
  const overlayColor = "black";

  return (
    <div className="relative w-full min-h-[100vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: opacity / 100 }}
      ></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
