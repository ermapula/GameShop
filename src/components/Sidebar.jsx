import { Box, TextField } from "@mui/material";

function Sidebar({ genres, handleSearch, handleGenreChange }) {
  return (
    <Box flex={1}>
      <Box position='fixed'>
        <TextField 
        label="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        />
      </Box>
    </Box>
  )
}

export default Sidebar;