import Link from "next/link";

export default function Footer() {
  const imageUrl = "/images/bg-footer.jpg";
  const opacity = 50;
  const overlayColor = "black";

  return (
    <div>
      <div className="w-full h-5 bg-[var(--color-orange-dark)]"></div>
      <div className="relative w-full min-h-[70vh] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor, opacity: opacity / 100 }}
        ></div>
        <div className="relative z-10 flex flex-col flex-grow justify-between py-10 px-4">
          <div className="flex justify-center">
            <Link
              href="/"
              className="cursor-pointer focus:outline-none"
            >
              <div className="inline-flex items-center border-4 border-[color:var(--color-cream)] rounded-lg px-3 pb-3 hover:border-[var(--color-orange)]">
                <h1 className="text-[var(--color-cream)] tracking-tight text-5xl font-bold focus:text-[var(--color-orange)] hover:text-[var(--color-orange)] transition-colors duration-300">
                  Gig Hunter
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-auto">
            <section className="flex justify-center gap-4">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="black"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-2 border-[var(--color-orange)] rounded-full p-2 bg-[var(--color-cream)] hover:bg-[var(--color-yellow)] cursor-pointer"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="white"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-2 border-[var(--color-orange)] rounded-full p-2 bg-black hover:bg-[var(--color-yellow)] hover:fill-black cursor-pointer"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-2 border-[var(--color-orange)] rounded-full p-2 bg-[var(--color-cream)] hover:bg-[var(--color-yellow)] cursor-pointer"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
