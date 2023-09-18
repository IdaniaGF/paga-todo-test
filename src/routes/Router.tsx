import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Contacts } from "../components/pages/Contacts";
import { AddContact } from "../components/pages/AddContact";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "contactos",
        element: <Contacts />,
      },
      {
        path: "nuevo/:contactId?",
        element: <AddContact />,
      },
    ],
  },
]);
