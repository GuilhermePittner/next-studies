"use client";
import Link from "next/link";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Task() {
    const params = useParams();
    const id = params.taskId;

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                if (!res.ok) {
                    throw new Error("Erro ao buscar tarefa.");
                }
                const data = await res.json();
                setTask(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchTask();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
                Detalhes da Tarefa
            </h2>

            <p><strong>ID:</strong> {task.id}</p>
            <p><strong>Título:</strong> {task.title}</p>
            <p><strong>Completa:</strong> {task.completed ? "Sim" : "Não"}</p>

            <div className="mt-6 space-x-4">
                <Link className="text-blue-600 hover:underline" href={`/req/${id}/comment`}>
                    Comentários da task
                </Link>
                <Link className="text-blue-600 hover:underline" href="/req">
                    Voltar
                </Link>
            </div>
        </div>
    );
}
