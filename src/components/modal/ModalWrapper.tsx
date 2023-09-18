import { Modal, Paper } from "@mui/material";
import { ReactNode } from "react";

interface ModalWrapperProps {
  open: boolean;
  children: ReactNode;
}

export const ModalWrapper = ({ open, children }: ModalWrapperProps) => {
  return (
    <Modal open={open} className="modal">
      <Paper>{children}</Paper>
    </Modal>
  );
};
