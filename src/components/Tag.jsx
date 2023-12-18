import { Typography } from "@mui/material";

export default function Tag({tag}) {
  return (
    <Typography sx={{
      bgcolor: "rgb(56, 180, 96)",
      p: "0 6px",
      borderRadius: "4px",
      width: "fit-content",
      height: "100%"
    }}>
      {tag}
    </Typography>
  )
}
