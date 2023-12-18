import { Box, Stack, Typography } from "@mui/material";
import Tag from "./Tag";

function LibraryGamePreview({game}) {
  return (
    <Box flex={3}>
    {
      game && (
      <>
      <Box 
        component="img"
        width="60vw"
        src={game.header}  
        alignSelf="center"
      />
      <Typography 
        variant="h2"
        fontWeight={700}
        alignSelf="center"
      >
        {game.title}
      </Typography>
      <Stack 
        direction="row" 
        alignItems="start"
        >
        <Box flex={4}>
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
      </>
      )
    }
    
    </Box>
  )
}

export default LibraryGamePreview;