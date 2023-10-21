import { Box } from "@mui/material";
import games from "../data/Games";
import StoreGamePreview from "./StoreGamePreview";

function StoreGames() {
  return (
    <Box 
      flex={4} 
      paddingRight="2%" 
      paddingLeft="2%"
    >
      {
        games.map(game => (
          <StoreGamePreview {...game} key={game.id} />
        )) 
      }
    </Box>
  )
}

export default StoreGames;