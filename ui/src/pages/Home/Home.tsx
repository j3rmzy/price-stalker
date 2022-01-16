import { v4 as uuid } from "uuid";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ScraperCard from "../../components/ScraperCard";

import Wrapper from "../../components/Styled/Wrapper";
import { getLowestPrice } from "../../utils";

const Scrapers = [
    {
        id: "1",
        productName: "Adidas NMD R1",
        productImage: "https://i8.amplience.net/i/jpl/jd_464981_a?qlt=92&w=750&h=531&v=1&fmt=auto",
        productScrapers: [
            {
                productWebsiteName: "JD Sports",
                productWebsiteURL: "https://www.jdsports.co.uk/product/adidas-originals-nmdr1-og/16169166/",
                productPrice: 110
            }, {
                productWebsiteName: "Adidas UK",
                productWebsiteURL: "",
                productPrice: 70
            }
        ],
        dateCreated: Date.now(),
        dateLastChecked: new Date("12/05/2000")
    }
];




function Home() {
    return (
        <Wrapper maxWidth="md">
            <Grid container spacing={2}>
                {Scrapers.map(({ id, productName, productImage, productScrapers }) => (
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