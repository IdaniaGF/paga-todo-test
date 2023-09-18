import * as React from "react";
import * as Schemas from "./ValidationSchemas";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { ContactAPI } from "../../api/Contacts";
import { useFetchData } from "../../hooks/useFetchData";
import { ContactModel } from "../../models/Models";
import { Button, TextField } from "@mui/material";
import { Loader } from "../Loader";
import { GenericModal } from "../modal/GenericModal";
import { ApiContactContext } from "../../context/ApiContactContext";

export const ContactForm = () => {
  const navigate = useNavigate();

  const contactToEdit = useLocation().state as ContactModel | undefined;
  const { post } = React.useContext(ApiContactContext);
  const [createContact, isLoading, handleSuccess, handleError] = useFetchData();

  const formik = useFormik({
    initialValues: {
      name: contactToEdit?.name ?? "",
      phone: contactToEdit?.phone ?? "",
      email: contactToEdit?.email ?? "",
      city: contactToEdit?.city ?? "",
    },
    validationSchema: Yup.object({
      name: Schemas.alphanumericPunctuationMarks(1, 100).required(
        "Campo obligatorio"
      ),
      phone: Schemas.numeric(10, 15).required("Campo obligatorio"),
      email: Schemas.emailFormat().required("Campo obligatorio"),
      city: Schemas.alphanumericPunctuationMarks(1, 100).required(
        "Campo Obligatorio"
      ),
    }),
    onSubmit: (values) => {
      const fetcher = () => post(values);
      createContact(fetcher);
    },
  });

  const fields: Array<{
    label: string;
    name: keyof typeof formik.values;
    required?: boolean;
  }> = React.useMemo(
    () => [
      { label: "Nombre", name: "name", required: true },
      { label: "Teléfono", name: "phone", required: true },
      { label: "Email", name: "email", required: true },
      { label: "Ciudad", name: "city", required: true },
    ],
    []
  );

  return (
    <>
      <form>
        {fields.map((el) => (
          <TextField
            label={`${el.label}${el.required ? "*" : ""}`}
            name={el.name}
            value={formik.values[el.name]}
            onChange={formik.handleChange}
            helperText={
              formik.errors[el.name] && formik.touched[el.name]
                ? formik.errors[el.name]
                : ""
            }
            error={!!formik.errors[el.name] && !!formik.touched[el.name]}
            key={el.label}
          />
        ))}
        <Button type="submit" variant="contained" onClick={formik.handleSubmit}>
          Enviar
        </Button>
      </form>
      <Loader isLoading={isLoading} />
      <GenericModal
        type="success"
        title={`El contacto fue ${
          contactToEdit ? "Editado" : "Agregado"
        } con éxito`}
        open={handleSuccess.open}
        handleClose={() => navigate("/contactos")}
      />
      <GenericModal
        type="error"
        title={`El contacto no pudo ser creado`}
        description={handleError.message}
        open={handleError.open}
        handleClose={handleError.handleClose}
      />
    </>
  );
};
