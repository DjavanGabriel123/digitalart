import CardPrincipal from "@/components/CardPrincipal";
import HomePage from "@/components/home/HomePage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="container mx-auto">
        <HomePage />
      </div>
    </main>
  );
}
