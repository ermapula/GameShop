import { Stack } from "@mui/material";
import StoreGames from "../components/StoreGames";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import games from '../data/Games.js';

function Store({user}) {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filteredGames, setFilteredGame] = useState([]);

  useEffect(() => {
    const tags = new Set();
    games.map((game) => {
      game.tags.map(tag => tags.add(tag))
    })
    setGenres([...tags])
  }, [])

  useEffect(() => {
    const data = games.filter((game) => {
      const matchesSearchTerm =
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase());
  
      const matchesGenres =
        selectedGenres.length === 0 ||
        game.tags.some((tag) => selectedGenres.includes(tag));
  
      return matchesSearchTerm && matchesGenres;
    })
    setFilteredGame(data)
  }, [searchTerm, selectedGenres])

  function handleSearch(input) {
    setSearchTerm(input);
  }

  function handleGenreChange(genres) {
    setSelectedGenres(genres);
  }

  function handleWishList(){
    if(user && user.wishlist){
      const data = games.filter(game => user.wishlist.includes(game.id))
      setFilteredGame(data);
    }
  }

  return (
    <Stack minHeight="100%" direction="row" bgcolor={"background.default"} >
      <Sidebar 
        genres={genres}
        handleSearch={handleSearch}
        handleGenreChange={handleGenreChange}
        handleWishList={handleWishList}
        user={user}
        />
      <StoreGames games={filteredGames} />
    </Stack>
  )
}

export default Store;