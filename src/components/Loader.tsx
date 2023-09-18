import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress />
    </Backdrop>
  );
};
