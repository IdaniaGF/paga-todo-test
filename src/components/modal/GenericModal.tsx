import { ModalWrapper, ModalWrapperProps } from "./ModalWrapper";
import { CheckCircle, Cancel } from "@mui/icons-material";

export interface GenericModalProps extends ModalWrapperProps {
  /** The title of the Modal.*/
  title: string;
  /** The description of the Modal.*/
  description?: string | string[];
  /** The modal type.*/
  type: "error" | "success";
  /** The id used to test this component.*/
  testid?: string;
}

const iconType = {
  success: <CheckCircle />,
  error: <Cancel />,
};

/**
 * This Generic Modal render a modal with a transparent dark Backdrop. Is wrapped by a {@link ModalWrapper}. Display a title, a description and an icon according to the modal type. It can be used either show success operation info or error descriptions.
 */
export const GenericModal = ({
  title,
  description,
  type,
  open,
  children,
  testid,
}: GenericModalProps) => {
  return (
    <ModalWrapper open={open}>
      <div className={type} data-testid={testid}>
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
