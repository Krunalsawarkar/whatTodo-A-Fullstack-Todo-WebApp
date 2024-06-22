import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>whatTodo</h1>
      <Button>Submit</Button>
    </main>
  );
}
