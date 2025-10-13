"use client";
interface BackdropProps {
  children: React.ReactNode;
  imageUrl: string;
  opacity: number;
  overlayColor: string
}

export default function Backdrop({ 
  children, 
  imageUrl = '', 
  opacity = 0,
  overlayColor = ''
}: BackdropProps) {
  return (
    <div className="relative w-full min-h-[100vh]">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className={`absolute inset-0 bg-[${overlayColor}]/${opacity}`}></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}