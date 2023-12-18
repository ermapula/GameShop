import { Stack, Typography } from "@mui/material";
import LibraryGameList from "../components/LibraryGameList";
import LibraryGamePreview from "../components/LibraryGamePreview";
import { useEffect, useState } from "react";

import gamesData from '../data/Games.js';

function Library({user}) {
  const [userGames, setUserGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    if(user && user.library){
      const data = gamesData.filter(game => user.library.includes(game.id))
      setUserGames(data);
    }
  }, [user])

  return (
    <Stack 
      direction="row"
      bgcolor={"background.default"}
      height="100%"
      gap={5}
    >
      {
        user ? (
          <LibraryGameList games={userGames} selectGame={setSelectedGame} />
        ) : (
          <Typography variant="h4">Please log in to see your games</Typography>
        )
      }
  
      <LibraryGamePreview game={selectedGame} />
      
    </Stack>
  )
}

export default Library;