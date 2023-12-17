import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Tag from "./Tag";

function StoreGamePreview({...game}) {

  return (
    <Box sx={{
      boxShadow: "0px 0px 2px rgb(200, 200, 200)",
      padding: "20px",
      margin: "10px"
    }}>
      <Typography variant="h3" >
          {game.title}
      </Typography>
      <Stack 
        direction="row" 
        gap={1} justifyContent="space-between"
      >
        <Box 
          component="img"
          src={game.header} 
        />
        <Stack 
          direction="column"
          justifyContent="space-between"
          alignItems="end"
        >
          <Stack direction="column"
            alignItems="end"
            gap={1}>
            {
              game.tags && game.tags.map(tag => (
                <Tag tag={tag} key={tag} />
              ))
            }
          </Stack>
          <Typography variant="h5" fontWeight={700} color="rgb(169, 221, 255)">
            {game.price ? `$${game.price}` : "Free"}
          </Typography>
        </Stack>
      </Stack>
        <Link to={`/game/${game.id}`} game={game}>
          Visit the game&apos;s page
        </Link>
    </Box>
  )
}

export default StoreGamePreview;