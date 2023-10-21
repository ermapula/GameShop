import { Stack } from "@mui/material";
import StoreGames from "../components/StoreGames";
import Sidebar from "../components/Sidebar";

function Store() {
  return (
    <Stack direction="row" bgcolor={"background.default"}>
      <Sidebar />
      <StoreGames />
    </Stack>
  )
}

export default Store;