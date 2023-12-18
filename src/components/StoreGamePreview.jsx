import { Box, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Tag from "./Tag";

const MLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  fontSize: "30px",
  "&:hover": {
      color: "rgba(155,155,255, 0.9)",
    }
})

function StoreGamePreview({...game}) {

  return (
    <Box sx={{
      boxShadow: "0px 0px 2px rgb(200, 200, 200)",
      padding: "20px",
      margin: "10px"
    }}>
      <MLink 
        to={`/game/${game.id}`}
        game={game}
        
        >
        <Typography variant="h3">
            {game.title}
        </Typography>
      </MLink>
      <Stack 
        direction="row" 
        gap={1} justifyContent="space-between"
      >
        <Box 
          component="img"
          sx={{
            objectFit: "cover",
            width: "460px",
            height: "215px"
          }}
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
          <Typography marginTop={5} variant="h5" fontWeight={700} color="rgb(169, 221, 255)">
            {game.price ? `$${game.price}` : "Free"}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default StoreGamePreview;