import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { Outlet, Link, useNavigate } from "react-router-dom";

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

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
`

const StyledButton = styled(Button)`
  justify-items: flex-end;
`

function Header() {
  let navigate = useNavigate();

  return (
    <>
      <Box>
        <StyledAppBar position="static">
          <Toolbar variant="dense">
            <StyledLocalAtmTwoToneIcon />
            <Title><StyledLink to="/scrapers">Price Stalker</StyledLink></Title>
            <StyledButton onClick={() => navigate("add")}>Add Product</StyledButton>
          </Toolbar>
        </StyledAppBar>
      </Box>
      <Outlet />
    </>
  )
}

export default Header;