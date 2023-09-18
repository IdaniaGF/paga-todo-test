import * as React from "react";
import { ContactModel } from "../models/Models";
import { HttpResponse } from "../Types";

export const ApiContactContext = React.createContext();

export const ApiContactContextProvider = ({ children }) => {
  const [dataBase, setDataBase] = React.useState<ContactModel[]>([
    {
      id: 1,
      name: "Idania Guerrero",
      phone: "6782736471",
      email: "idania@email.com",
      city: "Gustavo A. Madero",
    },
    {
      id: 2,
      name: "Maria Fonseca",
      phone: "7726374817",
      email: "Maria@email.com",
      city: "Gustavo A. Madero",
    },
    {
      id: 3,
      name: "Miguel Flores",
      phone: "1892736471",
      email: "miguel@email.com",
      city: "Gustavo A. Madero",
    },
    {
      id: 4,
      name: "Mario Molina",
      phone: "16736471871",
      email: "mario@email.com",
      city: "Gustavo A. Madero",
    },
    {
      id: 5,
      name: "Mateo Morales",
      phone: "78274637846",
      email: "mateo@email.com",
      city: "Gustavo A. Madero",
    },
  ]);

  const get = (
    page?: number,
    id?: number
  ): HttpResponse<{ data: ContactModel[] | ContactModel; total?: number }> => {
    if (page) {
      // Each page will have 10 results
      const startIndex = page * 10 - 10;
      const endIndex = page * 10;
      const paginatedData = dataBase.splice(startIndex, endIndex);
      return {
        status: 200,
        data: {
          data: paginatedData,
          total: dataBase.length,
        },
      };
    } else if (id) {
      const contact = dataBase.find((el) => el.id == id);
      if (!contact) {
        return {
          status: 400,
          error: "El contacto no existe",
        };
      }
      return {
        status: 200,
        data: {
          data: contact,
        },
      };
    } else {
      throw new Error("You must provide either page or id params");
    }
  };

  const post = (data: Omit<ContactModel, "id">) => {
    const newId = dataBase.length + 1;
    setDataBase((prev) => [...prev, { id: newId, ...data }]);
    return {
      status: 200,
      data: { id: newId },
    };
  };

  const put = (data: ContactModel) => {
    const updatedDataBase = dataBase.map((el) =>
      el.id === data.id ? data : el
    );
    setDataBase(updatedDataBase);
    return {
      status: 200,
    };
  };

  const drop = (id: number) => {
    const updatedDataBase = dataBase.filter((el) => el.id === id);
    setDataBase(updatedDataBase);
    return {
      status: 200,
    };
  };

  return (
    <ApiContactContext.Provider value={{ get, post, put, drop }}>
      {children}
    </ApiContactContext.Provider>
  );
};
