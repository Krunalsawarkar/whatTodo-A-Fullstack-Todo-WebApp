import { Button } from "@/components/ui/button";
import Tasks from "@/components/ui/todo/tasks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>whatTodo</h1>
      <Button>Submit</Button>
      <Tasks />
    </main>
  );
}
