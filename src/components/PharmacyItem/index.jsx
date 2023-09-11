"use client";

export function PharmacyItem({ children, item }) {
  return (
    <a href="#">
      <div className="overflow-hidden flex hover:bg-slate-800 cursor-pointer">
        {children}
        <div className="mt-4">
          <p className="text-sm font-medium text-slate-50">{item.Farmacia}</p>
          <p className="text-sm text-slate-100 ">
            {item.Direccion} - {item.Municipio}
          </p>
        </div>
      </div>
    </a>
  );
}
