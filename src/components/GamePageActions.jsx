import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

const MyButton = styled(Button) ({
  backgroundColor: "navy" 
})

export default function GamePageActions(props) {
  return (
    <Stack direction="row" gap={1} justifyContent="center">
      <MyButton>
        Add to wishlist
      </MyButton>
      <MyButton>
        Buy
      </MyButton>
      <MyButton>
        Share
      </MyButton>
    </Stack>
  )
};
