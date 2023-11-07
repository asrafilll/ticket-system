"use client";
import { TicketTypeComponent } from "./Components/TicketTypeComponent";
import { CustomersComponent } from "./Components/CustomersComponent";
import { PICDataComponent } from "./Components/PICDataComponent";
import { VendorsComponent } from "./Components/VendorsComponent";
import { UsersComponent } from "./Components/UsersComponent";

const menuItems = [
  {
    id: "ticketType",
    label: "Ticket Type",
    content: <TicketTypeComponent />,
  },
  { id: "customers", label: "Customers", content: <CustomersComponent /> },
  { id: "picData", label: "PIC Data", content: <PICDataComponent /> },
  { id: "vendors", label: "Vendors", content: <VendorsComponent /> },
  { id: "users", label: "Users", content: <UsersComponent /> },
];

export const Masters = ({ id }) => {
  const activeContent = menuItems.find((item) => item.id === id)?.content;

  return activeContent;
};
