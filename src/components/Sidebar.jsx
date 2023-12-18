import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, Stack, TextField } from "@mui/material";

function Sidebar({ genres, handleSearch, handleGenreChange }) {
  return (
      <Stack flex={1} gap={1} marginTop={1} > 
        <TextField 
          label="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <FormGroup>
        <Autocomplete
          multiple
          id="genres"
          options={genres}
          disableCloseOnSelect
          onChange={(e, value) => handleGenreChange(value)}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <FormControlLabel
                control={<Checkbox checked={selected} />}
                label={option}
              />
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Filter by Genres" />
          )}
          />
        </FormGroup>
      </Stack>
  )
}

export default Sidebar;