"use client";
export default function BackdropMail({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageUrl = "/images/bg-mailing.jpg";
  const opacity = 50;
  const overlayColor = "black";

  return (
    <div>
      <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
      <div className="relative w-full min-h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor, opacity: opacity / 100 }}
        ></div>
        <div className="relative z-10">{children}</div>
      </div>
      <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
    </div>
  );
}
