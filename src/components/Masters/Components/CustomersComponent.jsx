import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Modal,
} from "@nextui-org/react";
import { columns, customerDatas } from "./Data/CustomersData";
import { Trash, Pencil } from "lucide-react";
import SharedModal, { EditModal } from "@/components/Shared/EditModal";
import { DeleteModal } from "@/components/Shared/DeleteModal";

export const CustomersComponent = () => {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "actions":
        return (
          <div className="flex gap-4">
            <EditModal />
            <DeleteModal />
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align="center">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={customerDatas}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
