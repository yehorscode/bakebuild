import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="absolute left-5 z-999">
        <img
          width={200}
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
        />
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
