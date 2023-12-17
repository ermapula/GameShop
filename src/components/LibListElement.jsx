import { Icon, ListItem, Typography } from "@mui/material";

export default function LibListElement(props) {
  return (
    <ListItem direction="row" alignItems="center">
      <Icon />
      <Typography>
        Game {props.id}
      </Typography>
    </ListItem>
  )
};
