import { Stack } from "@mui/material";
import StoreGames from "../components/StoreGames";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import games from '../data/Games.js';

function Store() {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  

  useEffect(() => {
    const tags = new Set();
    games.map((game) => {
      game.tags.map(tag => tags.add(tag))
    })
    setGenres([...tags])
  }, [])

  function handleSearch(input) {
    setSearchTerm(input);
  }

  function handleGenreChange(genres) {
    setSelectedGenres(genres);
  }

  const filteredGames = games.filter((game) => {
    const matchesSearchTerm =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenres =
      selectedGenres.length === 0 ||
      game.tags.some((tag) => selectedGenres.includes(tag));

    return matchesSearchTerm && matchesGenres;
  })

  return (
    <Stack minHeight="100%" direction="row" bgcolor={"background.default"} >
      <Sidebar 
        genres={genres}
        handleSearch={handleSearch}
        handleGenreChange={handleGenreChange}
        />
      <StoreGames games={filteredGames} />
    </Stack>
  )
}

export default Store;