import { Box, Typography } from "@mui/material";

function NotFoundPage() {
  return (
    <Box bgcolor={"background.default"} height="100%" padding={10}>
      <Typography variant="h3">
        Error 404: Page not found
      </Typography>
    </Box>
  )
}

export default NotFoundPage;