
{/* old fashioned way 

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const chores = await data.json();
    return { props: chores }
}
*/}


export default async function Req() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const chores = await data.json();

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <title> TODO List. </title>

            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Important!! TO-DO List
            </h2>

            <ul className="space-y-2">
                {chores.map((item) => (
                    <li
                        key={item.id}
                        className="p-3 border border-gray-200 rounded-md hover:bg-gray-100 transition"
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

