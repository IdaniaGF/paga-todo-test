import { Button } from "@mui/material";
import { ContactModel } from "../../models/Models";
import { useContext } from "react";
import { ApiContactContext } from "../../context/ApiContactContext";
import { useNavigate } from "react-router-dom";

interface ContactCardProps {
  info: ContactModel;
}
export const ContactCard = ({ info }: ContactCardProps) => {
  const navigate = useNavigate();

  const { drop } = useContext(ApiContactContext);

  return (
    <div>
      <img src={`https://robohash.org/${info.name}.png`} />
      <p>{info.name}</p>
      <p>{info.phone}</p>
      <p>{info.email}</p>
      <p>{info.city}</p>
      <Button onClick={() => navigate("/nuevo", { state: info })}>
        Editar
      </Button>
      <Button onClick={() => drop(info.id)}>Eliminar</Button>
    </div>
  );
};
