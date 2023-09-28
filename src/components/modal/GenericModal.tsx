import { ReactNode } from "react";
import { ModalWrapper } from "./ModalWrapper";
import { CheckCircle, Cancel } from "@mui/icons-material";

export interface GenericModalProps {
  title: string;
  description?: string | string[];
  type: "error" | "success";
  open: boolean;
  children?: ReactNode | ReactNode[];
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
  children,
}: GenericModalProps) => {
  return (
    <ModalWrapper open={open}>
      <div className={type}>
        {iconType[type]}
        <p>{title}</p>
        {typeof description == "string" ? (
          <p>{description}</p>
        ) : typeof description == "object" ? (
          description.map((el) => <p key={el}>{el}</p>)
        ) : null}
      </div>
      {children}
    </ModalWrapper>
  );
};
