import { useState } from "react";
import { v4 as uuid } from "uuid";
import Wrapper from "../../components/Styled/Wrapper"
import {
    FormControl,
    TextField,
    Typography,
    Button 
} from "@mui/material"
import { styled } from "@mui/material/styles";
import ScraperDetails from "../ScraperDetails";

const StyledFormControl = styled(FormControl)`
    margin-top: 8px;
`

const StyledButton = styled(Button)`
`

const AddProductInputWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.grey["300"],
    padding: theme.spacing(),
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(2),
    borderRadius: 4,
}))

const StyledTextField = styled(TextField)`
    background-color: #FFF;
    overflow: hidden;
`

const StyledScraperDetailsWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledScraperDetailsTitle = styled(Typography)`
    font-weight: 400;
    font-size: 1.1rem;
`

const StyledForm = styled("form")`
    display: flex;
    flex-direction: column;
`

const ScraperDetailWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    borderTop: `1px dotted ${theme.palette.grey["500"]}`,
    marginTop: theme.spacing(),
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(),

    "& div:first-of-type": {
        marginTop: 0,
    }
}))

export default function AddProduct() {
    // const [addNew, setAddNew] = useState(false);
    const [newScrapers, setNewScrapers] = useState([]);

    const handleClick = () => {
        const scrapersLength = newScrapers.length;

        let newScraper = {
            [`productWebsite-${scrapersLength}`]: "",
            [`priceSelector-${scrapersLength}`]: "",
        }

        setNewScrapers([...newScrapers, newScraper]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Form")
    }

    console.log(newScrapers);

    return (
        <Wrapper maxWidth="md">
            <Typography variant="h6" component="h1">Add Product</Typography>
            <StyledForm onSubmit={e =>handleSubmit(e)}>
                <StyledFormControl>
                    <StyledTextField
                        variant="outlined"
                        name="productName"
                        id="productName"
                        label="Product Name"
                    />
                </StyledFormControl>
                <StyledFormControl>
                    <StyledTextField
                        variant="outlined"
                        name="productImage"
                        id="productImage"
                        label="Product Image"
                    />
                </StyledFormControl>
                <AddProductInputWrapper>
                    <StyledScraperDetailsWrapper>
                        <StyledScraperDetailsTitle variant="h3" component="h3">Scraper Details</StyledScraperDetailsTitle>
                        <StyledButton onClick={() => handleClick()}>Add Scraper</StyledButton>
                    </StyledScraperDetailsWrapper>
                    {newScrapers.map((newScraper, i) => (
                        <ScraperDetailWrapper key={uuid()}>
                            <StyledFormControl>
                                <StyledTextField
                                    variant="outlined"
                                    name={`productWebsite-${i}`}
                                    id={`productWebsite-${i}`}
                                    label="Website To Scrape"
                                />
                            </StyledFormControl>
                            <StyledFormControl>
                                <StyledTextField
                                    variant="outlined"
                                    name={`productPrice-${i}`}
                                    id={`productPrice-${i}`}
                                    label="Price Selector"
                                />
                            </StyledFormControl>
                        </ScraperDetailWrapper>
                    ))}
                </AddProductInputWrapper>
            </StyledForm>
            <Button type="submit" color="primary" variant="contained">Save Product</Button>
        </Wrapper>
    )
}