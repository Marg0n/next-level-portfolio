'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import serverError from "@/assets/images/ErrorServer.png";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <Image
         src={serverError} 
         alt="illustration"
         className="w-full lg:w-[500px]"
         width={500}
         height={500}
        />
        <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-6">
          <Button onClick={() => router.push('/')}>Go Home</Button>
        </div>
      </div>
    </div>
  );
}
