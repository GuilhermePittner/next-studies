"use client";
import { useState } from "react";
import Link from "next/link";

export default function Itens() {
    const [itens, setItens] = useState(["Tomate", "Cebola", "Maçã", "Cenoura", "Red Pants", "Blue Pants"]);

    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h3>2424344</h3>

            {itens.map((item, key) => (
                <p key={key}>{item}</p>
            ))}
            
            <Link href="/catalog/pants"> Check new pants </Link>

            <Link href="/"> Previous </Link>

        </div>
    );
}
