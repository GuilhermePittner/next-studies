
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>This is the mainpage.</h2>

      <Link className="text-blue-600 hover:underline" href="/catalog"> Catalog </Link>
    </div>
  );
}
