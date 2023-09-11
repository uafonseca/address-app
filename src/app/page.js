"use client";
import { PharmacyItem } from "@/components/PharmacyItem";
import { useState } from "react";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import data from "@/utils/data.json";

export default function Home() {
  const [result, setResult] = useState([]);

  const search = (data, query) => {
    const lowercaseQuery = query.toLowerCase();
    const results = [];
    if (query != "")
      for (const municipio of data.Municipios) {
        for (const farmacia of municipio.Farmacias) {
          if (
            farmacia.Nombre.toLowerCase().includes(lowercaseQuery) ||
            farmacia.Direccion.toLowerCase().includes(lowercaseQuery) ||
            municipio.Nombre.toLowerCase().includes(lowercaseQuery)
          ) {
            results.push({
              Municipio: municipio.Nombre,
              Farmacia: farmacia.Nombre,
              Direccion: farmacia.Direccion,
            });
          }
        }
      }

    setResult(results);
    console.log(result);
  };

  const handleChange = (e) => {
    console.log(data, e.target.value);
    search(data, e.target.value);
  };
  return (
    <main className="flex h-screen">
      <div className="m-auto w-2/6">
        <blockquote className="text-4xl m-10 font-semibold italic text-center text-slate-300">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">B</span>
          </span>
          USCADOR
        </blockquote>
        <input
          type="text"
          name="email"
          autoComplete="off"
          className="text-center mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="¿Que estás buscando?"
          onChange={handleChange}
        />
        {result.map((item) => {
          return (
            <PharmacyItem key={item.Farmacia} item={item}>
              <MdOutlineLocalPharmacy size={40} className="m-4" />
            </PharmacyItem>
          );
        })}
      </div>
    </main>
  );
}
