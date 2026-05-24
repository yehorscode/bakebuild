import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute left-5 z-999">
        <img
          fetchPriority="low"
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          className="w-[25vw] sm:w-[30vw] md:w-50"
        />
      </div>
      <nav className="absolute right-2 p-3 text-white ">
        <div className="flex gap-3 text-right ">
          <a
            className="text-right font-jaro bg-gray-900 py-1 px-2 text-xl"
            href="/"
          >
            Home
          </a>
          <a
            className="text-right font-jaro bg-gray-900 py-1 px-2 text-xl z-2000"
            href="/gallery"
          >
            Gallery
          </a>
        </div>
      </nav>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      {/*<footer className="bg-gray-400">
        <span>Footer</span>
      </footer>*/}
    </div>
  );
}
