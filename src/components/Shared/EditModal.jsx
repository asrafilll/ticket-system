import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { FileSignature, Trash } from "lucide-react";

export const EditModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        color="primary"
        size="sm"
        variant="flat"
      >
        <FileSignature size={14} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter the store/customer name"
                  variant="bordered"
                />
                <div className="mt-3 text-xs text-slate-500">
                  Address Details
                </div>
                <Input
                  placeholder="Detail Address"
                  variant="bordered"
                  size="sm"
                />
                <Input placeholder="City" variant="bordered" size="sm" />
                <Input placeholder="Province" variant="bordered" size="sm" />
                <Input placeholder="Country" variant="bordered" size="sm" />
                <Input placeholder="Postal Code" variant="bordered" size="sm" />
                <Input
                  placeholder="Google Maps URL"
                  variant="bordered"
                  size="sm"
                />
                <div className="mt-3 text-xs text-slate-500">Phone Number</div>
                <Input
                  placeholder="Phone Number"
                  type="password"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
