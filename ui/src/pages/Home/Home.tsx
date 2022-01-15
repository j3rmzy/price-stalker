import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ScraperCard from "../../components/ScraperCard";

const Wrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing()
}))

function Home() {
    return (
        <Wrapper>
            <Grid container spacing={2}>
                <Grid item sm={4} md={3}>
                    <ScraperCard />
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Home;