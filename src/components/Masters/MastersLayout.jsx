"use client";
import { useState } from "react";
import { Masters } from "./Master";

const menuItems = [
  {
    id: "ticketType",
    label: "Ticket Type",
  },
  { id: "customers", label: "Customers" },
  { id: "picData", label: "PIC Data" },
  { id: "vendors", label: "Vendors" },
  { id: "users", label: "Users" },
];

export const MastersLayout = () => {
  const [activeContent, setActiveContent] = useState("ticketType");
  const handleMenuClick = (id) => {
    setActiveContent(id);
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto flex gap-4 items-start">
        <div className="border-1 border-neutral-100 w-1/3 rounded-lg">
          <div className="flex-col gap-4 text-sm text-slate-600">
            {menuItems.map((item) => (
              <div
                className="border-neutral-100 border-b-1 p-3 hover:cursor-pointer hover:bg-neutral-100"
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/3 h-[700px]">
          <Masters id={activeContent} />
        </div>
      </div>
    </div>
  );
};
