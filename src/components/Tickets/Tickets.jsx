"use client";
import TicketsTable from "./TicketTable";
import TicketNavbar from "./Tickets.Navbar";

export const Tickets = () => {
  return (
    <div className="mt-2">
      <TicketNavbar />

      <div className="max-w-6xl mx-auto mt-10 flex flex-col gap-4 h-full">
        <TicketsTable />
      </div>
    </div>
  );
};
