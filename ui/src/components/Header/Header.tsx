import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)`
  font-weight: 600;
  text-transform: uppercase;
  margin: 8px;
  color: #333;
`

const StyledAppBar = styled(AppBar)`
  background-color: #FFFFFF;
  box-shadow: none;
  border-bottom: 1px solid #CCC;
`;

const StyledLocalAtmTwoToneIcon = styled(LocalAtmTwoToneIcon)`
  fill: #333;
`

function Header() {
  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar variant="dense">
          <StyledLocalAtmTwoToneIcon />
          <Title>Price Stalker</Title>
        </Toolbar>
      </StyledAppBar>
    </Box>
  )
}

export default Header;