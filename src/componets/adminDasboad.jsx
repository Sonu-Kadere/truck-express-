import React from "react";
import {
  Gavel,
  CalendarCheck,
  BookOpen,
  CreditCard,
  FileText,
  MapPin,
  Truck,
  Navigation,
  PackagePlus,
  PackageMinus,
} from "lucide-react";

const cards = [
  { title: "BID", count: "", color: "bg-indigo-400", Icon: Gavel },
  {
    title: "BOOKING REVIEW", count: "00", color: "bg-teal-400",Icon: CalendarCheck
  },
  { title: "BOOKING", count: "150", color: "bg-slate-500", Icon: BookOpen },
  { title: "PAYMENT", count: "500", color: "bg-pink-400", Icon: CreditCard },
  { title: "POD", count: "", color: "bg-gray-400", Icon: FileText },
  { title: "TRACKING", count: "", color: "bg-blue-800", Icon: MapPin },
  { title: "TRANSPORTER", count: "", color: "bg-cyan-400", Icon: Truck },
  { title: "ROUTES", count: "", color: "bg-green-400", Icon: Navigation },
  { title: "LOADING", count: "150", color: "bg-pink-300", Icon: PackagePlus },
  {
    title: "UNLOADING",
    count: "500",
    color: "bg-pink-200",
    Icon: PackageMinus
  },
];

export default function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`${card.color} rounded-lg shadow-md p-4 flex flex-col justify-center items-center h-40`}
        >
          {card.Icon && <card.Icon size={40} className="mb-2 text-white" />}
          <div className="text-xl font-bold text-white text-center">
            {card.title}
          </div>
          {card.count && (
            <div className="text-2xl text-white">{card.count}</div>
          )}
        </div>
      ))}
    </div>
  );
}
