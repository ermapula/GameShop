import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import games from '../data/Games';
import Tag from "../components/Tag";
import GamePageActions from "../components/GamePageActions";

function GamePage() {
  const { game_id } = useParams();
  const [ game, setGame ] = useState({});

  useEffect(() => {
    // console.log(game_id)
    const [thisgame] = games.filter(game => game.id == game_id)
    if(thisgame){
      // game exists => show game page
      setGame(thisgame)
    }
    else{
      console.log(`Game id:${game_id} doesn't exist`)
      // game doesn't exist => show 404 or do smth else
    }
  }, [game_id]);
  /**
   * Layout
   * Game title
   * screens / trailer
   * description
   * tags
   * rating
   * 
   * price
   * add to wishlist
   * 
   * specs
   * 
   * reviews
   * 
   */
  if(!game) {
    return (
      <Typography>
        Does not exits
      </Typography>
    )
  }

  return (
    <Stack 
      bgcolor={"background.default"} 
      padding={5}
      paddingLeft={20}
      paddingRight={20}
      direction="column"
    >
      <Typography 
        variant="h2"
        fontWeight={700}
        alignSelf="center"
        >
        {game.title}
      </Typography>
      
      <Box 
        component="img"
        width="60vw"
        src={game.header}  
        alignSelf="center"
        />
      <Stack 
        direction="row" 
        alignItems="start"
        marginTop={4}
        >
        <Box flex={4} padding={3}>
          <Typography variant="body1">
            {game.description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400
            }}>
            Developer: {game.developer}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400
            }}>
            Publisher: {game.publisher}
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography 
            variant="h6" 
            color="rgb(112, 255, 156)"
            >
            Tags:
          </Typography>

          <Stack direction="row"  gap={1} mt={1}>
            {
              game.tags && game.tags.map(tag => (
                <Tag tag={tag} key={tag} />
              ))
            }
          </Stack>
        </Box>
      </Stack>
      <GamePageActions />
    </Stack>
  )

}

export default GamePage;
