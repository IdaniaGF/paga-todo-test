import { Button } from "@mui/material";
import { ModalWrapper } from "./ModalWrapper";
import { CheckCircle, Cancel } from "@mui/icons-material";

interface GenericModalProps {
  title: string;
  description?: string | string[];
  type: "error" | "success";
  open: boolean;
  handleClose: () => void;
}

const iconType = {
  success: <CheckCircle />,
  error: <Cancel />,
};

export const GenericModal = ({
  title,
  description,
  type,
  open,
  handleClose,
}: GenericModalProps) => {
  return (
    <ModalWrapper open={open}>
      <div className={type}>
        {iconType[type]}
        <p>{title}</p>
        {typeof description == "string" ? (
          <p>{description}</p>
        ) : typeof description == "array" ? (
          description.map((el) => <p key={el}>{el}</p>)
        ) : null}
        <Button type="button" onClick={handleClose}>
          Aceptar
        </Button>
      </div>
    </ModalWrapper>
  );
};
