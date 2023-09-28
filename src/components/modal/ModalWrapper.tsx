import { Modal } from "@mui/material";
import { ReactNode } from "react";

export interface ModalWrapperProps {
  /** Indicates when to open the modal.*/
  open: boolean;
  /** Used to customize the modal.*/
  children?: ReactNode | ReactNode[];
}
/**
 * This is the nuclear modal component. It is wrapper which allow provide a modal functionalidity to thei children.
 */
export const ModalWrapper = ({ open, children }: ModalWrapperProps) => {
  return (
    <Modal open={open}>
      <div className="modal">{children}</div>
    </Modal>
  );
};
