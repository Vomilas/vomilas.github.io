import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";
import { SocialMedia } from "../components/SocialMedia";
import { EmailAddressBar } from "../components/EmailAddressBar";
import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Portfolio } from "../components/Portfolio";
import { Contacts } from "../components/Contacts";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full snap-mandatory bg-primary">
      <Header />
      <Welcome />
      <SocialMedia />
      <EmailAddressBar />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contacts />
    </main>
  );
}
