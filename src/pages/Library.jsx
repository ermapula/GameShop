import { Stack } from "@mui/material";
import LibraryGameList from "../components/LibraryGameList";
import LibraryGamePreview from "../components/LibraryGamePreview";

function Library() {
  return (
    <Stack direction="row">
      <LibraryGameList />
      <LibraryGamePreview />
    </Stack>
  )
}

export default Library;