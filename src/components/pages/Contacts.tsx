import * as React from "react";
import { ContactAPI } from "../../api/Contacts";
import { useFetchData } from "../../hooks/useFetchData";
import { List, ListItem, ListItemText } from "@mui/material";
import { ContactModel } from "../../models/Models";
import { Loader } from "../Loader";
import { Grid } from "@mui/material";
import { ContactCard } from "../cards/ContactCard";
import { ListPagination } from "../lists/ListPagination";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ApiContactContext } from "../../context/ApiContactContext";

export const Contacts = () => {
  const [page, setPage] = React.useState(1);
  const { get } = React.useContext(ApiContactContext);
  const fetcher = () => get(page);

  const [getContact, isLoading] = useFetchData();
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(1);

  React.useEffect(() => {
    const response = getContact(fetcher);
    setData(response.data ?? []);
    setTotal(response.total ?? 0);
  }, [page]);

  const [cardInfo, setCardInfo] = React.useState<ContactModel>();

  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Button variant="outlined" onClick={() => navigate("/nuevo")}>
            Nuevo
          </Button>
          <List>
            {data.length
              ? data.map((el) => (
                  <ListItem
                    onClick={() => setCardInfo(el)}
                    key={el.id}
                    className="cursor-pointer"
                  >
                    <ListItemText primary={el.name} />
                  </ListItem>
                ))
              : "No tienes contactos"}
          </List>
          <ListPagination page={page} setPage={setPage} total={total} />
        </Grid>
        <Grid item xs={8}>
          {cardInfo ? <ContactCard info={cardInfo} /> : null}
        </Grid>
      </Grid>
      <Loader isLoading={isLoading} />
    </>
  );
};
