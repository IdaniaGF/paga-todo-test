import * as Yup from "yup";

export const alphanumeric = (min: number, max: number) => {
  return Yup.string()
    .matches(/^[\w\u00C0-\u024F\u1E00\s]+$/, "Debe ser alfanumérico") // Sólo números y letras
    .min(min, "Demasiado corto")
    .max(max, "Demasiado largo");
};

export const alphanumericPunctuationMarks = (min: number, max: number) => {
  return Yup.string()
    .matches(
      /^[A-Za-z0-9\u00C0-\u024F\u1E00\s'.,-]*$/,
      "Solo letras, números, signos de puntuación, guiones y comillas"
    )
    .min(min, "Demasiado corto")
    .max(max, "Demasiado largo");
};

export const numeric = (min: number, max: number) => {
  return Yup.string()
    .matches(/^\d+$/, "Deben ser números sin espacios")
    .min(min, "Demasiado corto")
    .max(max, "Demasiado largo");
};

export const emailFormat = () => {
  return Yup.string().matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Formato incorrecto"
  );
};
