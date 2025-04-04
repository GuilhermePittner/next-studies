

import Link from "next/link";


export default function Red() {
    return (<>
        <h2>Here you can buy red pants.</h2>

        <div>red pants</div>
        <Link className="text-blue-600 hover:underline" href="/catalog/pants"> Previous </Link>
    </>
    )
}