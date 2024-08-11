import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 items-center justify-center h-screen">
      <h1 className="text-9xl font-extrabold"> StandUp</h1>
      <Link href={"/dashboard"}>
        <Button>Visit Home Page</Button>
      </Link>
      <Link href={"/dashboard/issues"}>
        <Button>Visit issues</Button>
      </Link>
      <Link href={"/browse/CAL-4131"}>
        <Button>browse Issue</Button>
      </Link>
    </main>
  );
}
