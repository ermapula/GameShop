import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function StoreGamePreview({...game}) {
  return (
    <Box>
      {game.id}
      <Typography variant="h3" >
        <Link to={`/game/${game.id}`}>
          {game.title}
        </Link>
      </Typography>
    </Box>
  )
}

export default StoreGamePreview;