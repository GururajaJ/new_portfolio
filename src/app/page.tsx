"use client";

import { Navbar } from "@/components/Navbar";
import { MinimalistLayout } from "@/components/MinimalistLayout";
import { Footer } from "@/components/Footer";
import { CyberGrid } from "@/components/CyberGrid";

export default function Home() {
  return (
    <>
      {/* Dynamic white background grid backdrop */}
      <CyberGrid />
      
      <Navbar />
      <main className="flex-1">
        <MinimalistLayout />
      </main>
      <Footer />
    </>
  );
}
