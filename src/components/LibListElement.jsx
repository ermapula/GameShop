import { Box, ListItem, Typography } from "@mui/material";

export default function LibListElement({game, selectGame}) {
  return (
    <ListItem 
      onClick={() => {selectGame(game)}}
      direction="row" 
      alignItems="center"
      sx={{cursor: "pointer", "&:hover": {backgroundColor: "rgba(255, 255, 255, 0.1)"}}}
    >
      <Box 
        component="img"
        width="100px"
        src={game.header}  
        alignSelf="center"
        marginRight={1}
        />
      <Typography>
        {game.title}
      </Typography>
    </ListItem>
  )
};
