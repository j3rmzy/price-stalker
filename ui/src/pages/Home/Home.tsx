import { v4 as uuid } from "uuid";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import ScraperCard from "../../components/ScraperCard";

import Wrapper from "../../components/Styled/Wrapper";
import { getLowestPrice } from "../../utils";

import { IProductScrapers } from "../../data";
import { useEffect } from "react";

interface ProductProps {
    _id: string,
    productName: string,
    productImage: string,
    productScrapers: IProductScrapers[]
}

async function getProducts() {
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json();

    return data;

}

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, [])

    return (
        <Wrapper maxWidth="md">
            <Grid container spacing={2}>
                {products && products.map(({ _id, productName, productImage, productScrapers, ...rest }: ProductProps) => (
                    <Grid key={uuid()} item xs={12} sm={4}>
                        <ScraperCard
                            id={_id}
                            productName={productName}
                            productImage={productImage}
                            productLowestPrice={10}
                        />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    )
}

export default Home;
