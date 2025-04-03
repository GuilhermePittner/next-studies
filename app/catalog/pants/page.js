
import Link from "next/link";

export default function Pants() {
    return (<>
        <p>Choose a pant. /red or /blue </p>

        <Link href="/catalog/pants/red"> Red </Link>
        <Link href="/catalog/pants/blue"> Blue </Link>

        <Link href="/catalog"> Previous </Link>
    </>
    )
}