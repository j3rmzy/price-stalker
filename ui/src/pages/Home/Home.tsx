import { v4 as uuid } from "uuid";
import Grid from "@mui/material/Grid";
import ScraperCard from "../../components/ScraperCard";

import Wrapper from "../../components/Styled/Wrapper";
import { getLowestPrice } from "../../utils";

import { getScrapers, IProductScrapers } from "../../data";

interface IScraper {
    id: string,
    productName: string,
    productImage: string,
    productScrapers: IProductScrapers[]
}

function Home() {
    const scrapers = getScrapers();

    return (
        <Wrapper maxWidth="md">
            <Grid container spacing={2}>
                {scrapers.map(({ id, productName, productImage, productScrapers }: IScraper) => (
                    <Grid key={uuid()} item xs={12} sm={4}>
                        <ScraperCard
                            id={id}
                            productName={productName}
                            productImage={productImage}
                            productLowestPrice={getLowestPrice(productScrapers) as number}
                        />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    )
}

export default Home;