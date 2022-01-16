import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledCardActions = styled(CardActions)`
    justify-content: flex-end
`

const Label = styled(Typography)`
    text-transform: uppercase;
    color: #666;
    font-size: 12px;
`

const PriceWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    text-align: right;
`

const PriceTextWrapper = styled("p")`
    font-size: 2.5rem;
    margin: 0;
    font-weight: 600;
`

const CurrencySymbol = styled("span")`
    font-size: 0.875rem;
    font-weight: 400;
`

const StyledCardContent = styled(CardContent)`
    padding-bottom: 0;
`

interface IScraperCard {
    id: number,
    productName: string,
    productImage: string,
    productLowestPrice: number
}

function ScraperCard({ id, productName, productImage, productLowestPrice }: IScraperCard): JSX.Element {
    let navigate = useNavigate();

    return (
        <Card>
            <CardMedia
                component="img"
                image={productImage}
            />
            <StyledCardContent>
                <Grid container>
                    <Grid item xs={7}>
                        <Label variant="body2">Item</Label>
                        <Typography>{productName}</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <PriceWrapper>
                            <Label variant="body2">Lowest Price</Label>
                            <PriceTextWrapper>
                                <CurrencySymbol>£</CurrencySymbol>{productLowestPrice}
                            </PriceTextWrapper>
                        </PriceWrapper>
                    </Grid>
                </Grid>
            </StyledCardContent>
            <StyledCardActions>
                <Button onClick={() => navigate(id)}>Details</Button>
            </StyledCardActions>
        </Card>
    )
}

export default ScraperCard;