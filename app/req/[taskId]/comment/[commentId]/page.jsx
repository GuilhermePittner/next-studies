
"use client";
import Link from "next/link";
import { useParams } from 'next/navigation';

export default function CommentId(  ) {
    
    const params = useParams();
    const id = params.taskId;
    const c_id = params.commentId;

    return (
        <>
        <h2> Estou dentro da rota dinâmica que foi criada dentro de outra rota dinâmica </h2>
        <p> Porém agora o coment id é: {c_id} </p>
        <Link className="text-blue-600 hover:underline" href={`/req/${id}/comment`}> Back </Link>
        </>
    )
}