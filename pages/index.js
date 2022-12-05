import Head from "next/head";
import { prefix } from "../utils/prefix";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>

      <main>
        <h4>hello my beautiful world!</h4>
        <p>What's up my dude</p>
        <p>Let's say goodbye</p>
        <h1>Kingsman</h1>
        <img src={`${prefix}/favicon.ico`} alt="hey" />
      </main>
    </>
  );
}
