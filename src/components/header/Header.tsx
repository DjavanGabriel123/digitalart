
import { textHeader } from "@/utils/variables";
import { Image } from "@mantine/core";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between mt-5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </Link>
      <div className="flex items-center gap-6">
        <p className="text-white font-mono font-bold">{textHeader.explore}</p>
        <div className="flex gap-5">
          <Button className="p-6 rounded-full h-12 w-36">
            <span className="font-mono font-bold">{textHeader.signUp}</span>
          </Button>
          <Button className="p-6 rounded-full bg-violet-700 h-12 w-36">
            <span className="font-mono font-bold">{textHeader.signIn}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
