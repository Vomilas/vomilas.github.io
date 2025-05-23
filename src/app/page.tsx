"use client";

import { Header } from "@/components/Header/Header";
import { Welcome } from "@/components/Welcome/Welcome";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { EmailAddressBar } from "@/components/EmailAddressBar/EmailAddressBar";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Experience } from "@/components/Experience/Experience";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Contacts } from "@/components/Contacts/Contacts";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Loader } from "@/components/Loader/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="relative min-h-screen w-full snap-mandatory bg-primary">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <Welcome />
        <SocialMedia />
        <EmailAddressBar />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Contacts />
      </div>
    </main>
  );
}
