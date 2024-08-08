import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobilNav from "./MobilNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 p-6 py-4 lg:px-10 ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-white text-xl font-semibold max-sm:hidden">
          Video Call
        </p>
      </Link>

      <div className="flex-between gap-5 ">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobilNav />
      </div>
    </nav>
  );
};

export default Navbar;
