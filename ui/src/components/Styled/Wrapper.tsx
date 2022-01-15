import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Container)(({ theme }) => ({
    margin: `${theme.spacing(2)} auto`
}))

export default Wrapper;