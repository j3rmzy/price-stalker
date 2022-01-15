import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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

function ScraperCard() {
    return (
        <Card>
            <CardMedia
                component="img"
                image="https://i8.amplience.net/i/jpl/jd_464981_a?qlt=92&w=750&h=531&v=1&fmt=auto"
            />
            <StyledCardContent>
                <Grid container>
                    <Grid item xs={7}>
                        <Label variant="body2">Item</Label>
                        <Typography>Adidas NMD R1</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <PriceWrapper>
                            <Label variant="body2">Latest Price</Label>
                            <PriceTextWrapper>
                                <CurrencySymbol>£</CurrencySymbol>156
                            </PriceTextWrapper>
                        </PriceWrapper>
                    </Grid>
                </Grid>
            </StyledCardContent>
            <StyledCardActions>
                <Button size="small">Details</Button>
            </StyledCardActions>
        </Card>
    )
}

export default ScraperCard;