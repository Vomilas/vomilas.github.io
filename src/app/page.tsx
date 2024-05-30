import { Header, Welcome, SocialMedia } from "../components";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full snap-mandatory bg-primary">
      <Header />
      <Welcome />
      <SocialMedia />
    </main>
  );
}
