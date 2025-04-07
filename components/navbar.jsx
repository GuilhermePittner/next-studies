import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-yellow-400 p-4 shadow">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-white">Padaria Seu Zé</h1>
          <Link className="text-blue-600 hover:underline" href="/title"> Title Test Page </Link>
        </div>
      </nav>
    );
  }
  