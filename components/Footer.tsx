import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-10 px-4 text-center text-gray-500">
        <Image src={Logo} alt="SPLCD Logo" height={128} width={128} className="mb-4"/>
        <small className="mb-2 block text-xs">
            &copy; 2023 Matteo Di Iorio. All rights reserved.
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website:</span> built with
            React & Next.js using Server Actions, TypeScript, Tailwind CSS,
            Framer Motion, React Email & Resend, hosted on Vercel.
        </p>
        </footer>
  );
}