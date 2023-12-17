import { Box, List, Stack } from "@mui/material";
import LibListElement from "./LibListElement";

function LibraryGameList() {
  const ids = [];
  for(let i = 1; i < 101; i++) {
    ids.push(i)
  }

  return (
    <Box flex={1}
      bgcolor={"background.default"}
    >
      <Box 
        // sx={{overflowY:'scroll'}}
        bgcolor={"background.default"}
        > 
        
        <List direction="column"
        >
          {
            ids.map(id => (
              <LibListElement id={id} key={id} />
            ))
          }
        </List>
      </Box>
    </Box>
  )
}

export default LibraryGameList;