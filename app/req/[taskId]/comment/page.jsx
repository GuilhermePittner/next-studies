
"use client";
import Link from "next/link";
import { useParams } from 'next/navigation';

export default async function Comment() {
    const params = useParams();
    const id = params.taskId;


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <title> Comment </title>

            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Comment
            </h2>

            <Link className="text-blue-600 hover:underline" href={`/req/${id}/comment/1`}> Comentários de ID 1 </Link>
            <Link className="text-blue-600 hover:underline" href={`/req/${id}/comment/2`}> Comentários de ID 2 </Link>
            <Link className="text-blue-600 hover:underline" href={`/req/${id}/comment/3`}> Comentários de ID 3 </Link>
        </div>
    );
}

