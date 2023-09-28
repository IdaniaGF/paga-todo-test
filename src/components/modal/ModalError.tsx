import { Button } from "@mui/material";
import { GenericModal, GenericModalProps } from "./GenericModal";

interface ModalErrorProps extends Omit<GenericModalProps, "type"> {
  /** A callback to execute to close the modal.*/
  handleClose: () => void;
}
/** A modal to display some error messages when something fail. Is wrapped by a {@link GenericModal}, render a {@link Button} to allow close the modal.*/
export const ModalError = ({ handleClose, ...elseProps }: ModalErrorProps) => {
  return (
    <GenericModal type="error" {...elseProps} testid="modal-error">
      <Button onClick={handleClose} variant="contained" size="small">
        Aceptar
      </Button>
    </GenericModal>
  );
};
