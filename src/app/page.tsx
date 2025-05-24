"use client";

import { Header } from "@/components/Header/Header";
import { Welcome } from "@/components/Welcome/Welcome";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { EmailAddressBar } from "@/components/EmailAddressBar/EmailAddressBar";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Experience } from "@/components/Experience/Experience";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Contacts } from "@/components/Contacts/Contacts";
import { Loader } from "@/components/Loader/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="relative w-full bg-primary">
      <Header />
      <div className="flex flex-col">
        <Welcome />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Contacts />
      </div>
      <SocialMedia />
      <EmailAddressBar />
    </main>
  );
}
