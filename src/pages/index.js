import Articles from "@/compornent/Articles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MovingImg</title>
        <meta name="description" content="MovingImg" />
      </Head>
      <main className="flex flex-col justify-center items-center text-dark p-16 sm:p-6">
        <h1 className="text-6xl font-bold pb-12 sm:text-4xl sm:pb-3 dark:text-light">
          MovingImg
        </h1>
        <Articles />
      </main>
    </>
  );
}
