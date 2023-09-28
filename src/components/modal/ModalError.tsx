import { Button } from "@mui/material";
import { GenericModal, GenericModalProps } from "./GenericModal";

interface ModalErrorProps extends Omit<GenericModalProps, "type"> {
  handleClose: () => void;
}

export const ModalError = ({ handleClose, ...elseProps }: ModalErrorProps) => {
  return (
    <GenericModal type="error" {...elseProps}>
      <Button onClick={handleClose} variant="contained" size="small">
        Aceptar
      </Button>
    </GenericModal>
  );
};
