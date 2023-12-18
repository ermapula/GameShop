import { Box, List } from "@mui/material";
import LibListElement from "./LibListElement";

function LibraryGameList({games, selectGame}) {
  

  return (
    <Box flex={1} bgcolor={"background.default"}>
      <Box bgcolor={"background.default"}> 
        <List direction="column">
          {
            games.map(game => (
              <LibListElement  game={game} selectGame={selectGame} key={game.id} />
            ))
          }
        </List>
      </Box>
    </Box>
  )
}

export default LibraryGameList;