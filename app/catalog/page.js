"use client";
import { useState } from "react";
import Link from "next/link";

export default function Itens() {
    const [itens, setItens] = useState(["Tomate", "Cebola", "Maçã", "Cenoura", "Red Pants", "Blue Pants"]);

    return (
        <div>
            
            <h2>This is our catalog.</h2>

            {itens.map((item, key) => (
                <p key={key}>{item}</p>
            ))}
            
            <Link className="text-blue-600 hover:underline" href="/catalog/pants"> Check new pants </Link>

            <Link className="text-blue-600 hover:underline" href="/"> Previous </Link>

        </div>
    );
}
