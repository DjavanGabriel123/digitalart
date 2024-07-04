import { Image } from "@mantine/core";

export default function Footer() {
  return (
    <footer className=" text-white mt-14">
      <div className="container mx-auto px-11 py-8 flex justify-between items-start md:flex-row flex-col">
        <div className="flex flex-col max-w-xl">
          <Image src="/logo.svg" alt="logo" className="w-40" />
          <p className="mt-4 text-gray-400 text-sm font-mono tracking-wider">
            The home of long-form generative art on Solana. We are passionate about empowering artists to create on blockchain and giving collectors the peace of mind of tokenized, verifiable collectibles. Welcome to the New Frontier.
          </p>

          <span className="text-gray-400 text-xs mt-12 font-mono tracking-wider">
            ©2024 New Frontier Art, Inc. All Rights Reserved.
          </span>
        </div>

        <div className="flex flex-col mt-4 md:mt-0">
          <span className="font-bold font-mono text-xl tracking-wider mb-2 text-indigo-700">Account</span>
          <a href="#" className="text-gray-400 text-sm hover:text-gray-200 font-mono">Login</a>
          <a href="#" className="text-gray-400 text-sm hover:text-gray-200 font-mono">Settings</a>
        </div>
      </div>
    </footer>
  );
}
