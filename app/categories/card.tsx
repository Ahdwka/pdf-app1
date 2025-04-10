"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import type { Database } from "@/types/supabase";
import Image from "next/image";
import router from "next/router";
type Category = Database["public"]["Tables"]["categories"]["Row"];

export default function CategoriesCard() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from("categories")
          .select("*")
          .order("created_at", { ascending: true });

        if (fetchError) throw fetchError;
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="animate-fade-up animate-delay-2000 animate-once text-center text-6xl font-bold text-primary p-4">
        جار التحميل...
      </div>
    );
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (categories.length === 0)
    return <div className="text-center text-gray-500">لا توجد فئات حالياً</div>;

  return (
    <div className=" mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 animate-fade-up animate-delay-500 animate-once animate-ease-out">
        {categories.map((category) => (
          <div
            onClick={() => router.push(`/categories/${category.id}`)}
            key={category.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer mx-auto"
          >
            <Image
              className="w-full h-48 object-cover"
              src={category.image ?? ""}
              alt={category.name ?? ""}
              width={200}
              height={108}
            />
            <div className=" p-8">
              <h2
                className="text-2xl font-bold alexandria text-primary text-right"
                dir="rtl"
              >
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
