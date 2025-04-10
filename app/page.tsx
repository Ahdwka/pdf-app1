"use client";

import Card from "@/app/categories/card";
import Hero from "@/components/hero";
import Search from "@/components/search";
import { useState } from "react";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Hero />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Card />
    </div>
  );
}
