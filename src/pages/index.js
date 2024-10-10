import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import TransferNFTForm from "@/components/TransferNftForm";

const network = process.env.NEXT_PUBLIC_NETWORK || "SandNet";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className="mb-4">
          <h1 className="text-5xl mb-4">Mint ARC3 NFTs</h1>
          <span className="mb-4">Network: {network}</span>
        </div>
        <TransferNFTForm />
      </main>
    </>
  );
}
