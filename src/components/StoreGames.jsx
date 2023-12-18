import { Box, Typography } from "@mui/material";
import StoreGamePreview from "./StoreGamePreview";

function StoreGames({games}) {
  return (
    <Box 
      flex={4} 
      paddingRight="2%" 
      paddingLeft="2%"
    >
      {
        games.length > 0 ?
        games.map(game => (
          <StoreGamePreview {...game} key={game.id} />
        )) 
        : <Typography variant="h3" marginTop={5}>
          No games found
        </Typography>
      }
    </Box>
  )
}

export default StoreGames;