
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>

    {/* this is outdated:
    import Head from 'next/head';
    <Head> <title> My newest page </title> </Head>
    */}
    
    <title> My newest page </title>

    <div>
      <h2>This is the mainpage.</h2>

      <Link className="text-blue-600 hover:underline" href="/catalog"> Catalog </Link>

      <Image src="/images/test.png" width={300} height={300} alt="test_image" />
    </div>
    
    </>
  );
}
