import styled from "@emotion/styled";
import { Button, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MyButton = styled(Button) ({
  backgroundColor: "navy" 
})

export default function GamePageActions({gameId, user}) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [ownsGame, setOwnsGame] = useState(false)

  

  useEffect(() => {
    setOwnsGame(user.library.includes(gameId))
    setIsInWishlist(!!user.wishlist.find((id => id === gameId)))
  }, [gameId, user])

  function handleWishlist(e) {
    if(user){
      setIsInWishlist(e.target.checked)
    } else {
      alert('Login to save to wishlist')
    }
  }

  return (
    <Stack direction="row" gap={1} justifyContent="center">
      {
        ownsGame ? (
          <Typography variant="body2" color="textSecondary">
            This game is in your library
          </Typography>
        ) : (
          <>
          <FormControlLabel
            control={(<Checkbox
              checked={isInWishlist}
              onChange={handleWishlist}
            />)}
            label="Add to wishlist"
          />
          <MyButton>
            Buy
          </MyButton>
          </>
        )
      }
      <MyButton>
        Share
      </MyButton>
    </Stack>
  )
}
