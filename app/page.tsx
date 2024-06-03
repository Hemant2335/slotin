import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Image
        src="/assets/background.jpeg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </div>
  );
}
