
import Link from "next/link";

export default function Pants() {
    return (<>
        <h2>This is the itens page.</h2>

        <Link className="text-blue-600 hover:underline" href="/catalog/pants/red"> Red </Link>
        <Link className="text-blue-600 hover:underline" href="/catalog/pants/blue"> Blue </Link>

        <Link className="text-blue-600 hover:underline" href="/catalog"> Previous </Link>
    </>
    )
}