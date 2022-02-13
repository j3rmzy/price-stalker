import { v4 as uuid } from "uuid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Wrapper from "../../components/Styled/Wrapper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { getLowestPrice } from "../../utils";
import { getScraper } from "../../data";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductImage = styled("img")`
    width: 100%;
    max-width: 100%;
    border-radius: 10px;
`

const ProductSummaryWrapper = styled("div")`
    display: flex;
    flex-direction: column;
`

const ProductName = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    fontWeight: 600
}));

const ProductPrice = styled(Typography)`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;
`;

const CurrencySymbol = styled("span")`
    font-weight: 400;
    font-size: 0.875rem;
`

const ProductScraperDates = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.grey["300"],
    padding: theme.spacing(),
    margin: `${theme.spacing(1.5)} 0`,
}))

const ProductDate = styled(Typography)`
    font-size: 0.875rem;
    text-transform: uppercase;
    color: #333;
`

const ScraperDetailsPanel = styled(Paper)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(),
}));

const ScraperDetailsPanelInner = styled("div")(({ theme }) => ({
    padding: `0 ${theme.spacing(2)} ${theme.spacing(1)}`
}));

const ScraperDetailsPanelInnerRight = styled(ScraperDetailsPanelInner)`
    text-align: right;
`

const ScraperDetailsPanelLabel = styled(Typography)`
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #333;
`;
const ScraperDetailsPanelWebsite = styled(Typography)`
    font-size: 1.2rem;
`;
const ScraperDetailsPanelPrice = styled(Typography)`
    text-align: right;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
`;
const ScraperDetailsPanelFooter = styled("div")(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(),
    justifyContent: "flex-end",
    backgroundColor: "#f4f4f4"

}))

async function getProduct(id: string | undefined) {
  const res = await fetch(`http://localhost:5000/api/products/${id}`);
  const data = await res.json();
  return data;
}

function ScraperDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const data = getScraper();
    const dateCreateString = new Date(data.dateCreated).toLocaleString();
    const handleClick = (url: string) => window.open(url);

    useEffect(() => {
      getProduct(id)
        .then(data => setProduct(data));
    }, [])

    return (
      <>
        {product && (
          
        <Wrapper maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ProductSummaryWrapper>
                        <ProductImage src={product.productImage} />
                        <ProductName variant="h5" component="h1">{product.productName}</ProductName>
                        <ProductPrice>
                            {/* <CurrencySymbol>£</CurrencySymbol>{getLowestPrice(product.scrapeWebsites as [])} */}
                        </ProductPrice>
                    </ProductSummaryWrapper>
                    <ProductScraperDates>
                        <ProductDate>Date Created: {dateCreateString}</ProductDate>
                        <ProductDate>Last Scrape: {product?.lastDateScraped?.toLocaleString() || "Not scraped"}</ProductDate>
                    </ProductScraperDates>
                    <Button variant="contained">Check prices</Button>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  {product.productScrapers.map((scraper) => (
                      <ScraperDetailsPanel key={uuid()}>
                          <Grid container>
                              <Grid item xs={6}>
                                  <ScraperDetailsPanelInner>
                                      <ScraperDetailsPanelLabel>Website</ScraperDetailsPanelLabel>
                                      <ScraperDetailsPanelWebsite>{scraper.productWebsiteName}</ScraperDetailsPanelWebsite>
                                  </ScraperDetailsPanelInner>
                              </Grid>
                              <Grid item xs={6}>
                                  <ScraperDetailsPanelInnerRight>
                                      <ScraperDetailsPanelLabel>Price</ScraperDetailsPanelLabel>
                                      <ScraperDetailsPanelPrice>£{scraper.productPrice}</ScraperDetailsPanelPrice>
                                  </ScraperDetailsPanelInnerRight>
                              </Grid>
                              <Grid item xs={12}>
                                  <ScraperDetailsPanelFooter>
                                      <Button onClick={() => handleClick(scraper.productWebsiteURL)}>Go to website</Button>
                                  </ScraperDetailsPanelFooter>
                              </Grid>
                          </Grid>
                      </ScraperDetailsPanel>
                  ))}
                </Grid> */}
            </Grid>
        </Wrapper>
        )}
      </>
    )
}

export default ScraperDetails;
