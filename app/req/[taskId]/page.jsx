
"use client";
import Link from "next/link";
import { useParams } from 'next/navigation';

export default function Task( ) {
    
    const params = useParams();
    const id = params.taskId;

    return (
        <>
        <h2> Estou dentro da rota dinâmica </h2>
        <p> O valor é {id} </p>
        <Link className="text-blue-600 hover:underline" href={`/req/${id}/comment`}> Comentários da task </Link>

        <Link className="text-blue-600 hover:underline" href="/req"> Back </Link>
        </>
    )
}