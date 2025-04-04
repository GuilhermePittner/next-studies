

import Link from "next/link";


export default function Blue() {
    return (<>
        <h2>Here you can buy blue pants.</h2>

        <div>blue pants</div>
        <Link className="text-blue-600 hover:underline" href="/catalog/pants"> Previous </Link>
    </>
    )
}