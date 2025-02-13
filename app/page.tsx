import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full grid min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] place-items-center ">
      <button className="btn btn-neutral text-neutral-content text-4xl tracking-widest px-20 rounded-md">
        <Link href="/sayyes">Enter</Link>
      </button>
    </div>
  );
}
