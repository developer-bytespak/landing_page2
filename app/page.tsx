"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Markets from "@/components/Markets";
import Safety from "@/components/Safety";
import WhyPartner from "@/components/WhyPartner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import VideoStrip from "@/components/VideoStrip";

const queryClient = new QueryClient();

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Header />
        <main>
          <Hero />
          <Services />
          <VideoStrip />
          {/* <Markets /> */}
          <WhyPartner />
          <Experience />
          <Safety />
          <Credentials />
          <CTA />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
