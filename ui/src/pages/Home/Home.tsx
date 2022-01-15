import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ScraperCard from "../../components/ScraperCard";

import Wrapper from "../../components/Styled/Wrapper";

function Home() {
    return (
        <Wrapper maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <ScraperCard />
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Home;