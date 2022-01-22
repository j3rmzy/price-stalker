import { useState } from "react";
import { v4 as uuid } from "uuid";
import Wrapper from "../../components/Styled/Wrapper"
import {
    FormControl,
    TextField,
    Typography,
    Button, 
    InputLabel,
    InputBase
} from "@mui/material"
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const StyledFormControl = styled(FormControl)`
    margin: 8px 0;
`

const StyledButton = styled(Button)`
`

const AddProductInputWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.grey["300"],
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
    padding: 0.875rem;
`

const StyledScraperDetailsTitle = styled(Typography)`
    font-weight: 400;
    font-size: 1.1rem;
`

const StyledForm = styled("form")`
    display: flex;
    flex-direction: column;
`

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.common.white,
    borderRadius: 3,
    "& input": {
        padding: "0.875rem"
    }
}));

const StyledLabel = styled(InputLabel)(({ theme }) => ({
    transform: "none",
    position: "relative",
    marginBottom: theme.spacing(0.5)
}))

const ScraperDetailWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    borderTop: `1px dotted ${theme.palette.grey["500"]}`,
    padding: theme.spacing(2),

    "& div:first-of-type": {
        marginTop: 0,
    }
}));

const ButtonWrapper = styled("div")`
    display: inline-flex;
    justify-content: flex-end;
`;

export default function AddProduct() {
    const { register, handleSubmit } = useForm();
    const [newScrapers, setNewScrapers] = useState([]);

    const handleClick = () => {
        const scrapersLength = newScrapers.length;

        let newScraper = {
            [`productWebsite-${scrapersLength}`]: "",
            [`priceSelector-${scrapersLength}`]: "",
        }

        setNewScrapers([...newScrapers, newScraper]);
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Wrapper maxWidth="md">
            <Typography variant="h6" component="h1">Add Product</Typography>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledFormControl>
                    <StyledLabel shrink htmlFor="productName">Product Name</StyledLabel>
                    <StyledInputBase
                        id="productName"
                        {...register("productName")}
                    />
                </StyledFormControl>
                <StyledFormControl>
                    <StyledLabel shrink htmlFor="productImage">Product Image</StyledLabel>
                    <StyledInputBase
                        id="productImage"
                        {...register("productImage")}
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
                                <StyledLabel shrink htmlFor={`productWebsite-${i}`}>Product Image</StyledLabel>
                                <StyledInputBase
                                    id={`productWebsite-${i}`}
                                    {...register(`productWebsite-${i}`)}
                                />
                            </StyledFormControl>
                            <StyledFormControl>
                                <StyledLabel shrink htmlFor={`productPrice-${i}`}>Price Selector</StyledLabel>
                                    <StyledInputBase
                                        id={`productPrice-${i}`}
                                        {...register(`productPrice-${i}`)}
                                    />
                            </StyledFormControl>
                        </ScraperDetailWrapper>
                    ))}
                </AddProductInputWrapper>
                <ButtonWrapper>
                    <Button type="submit" color="primary" variant="contained">Save Product</Button>
                </ButtonWrapper>
            </StyledForm>
        </Wrapper>
    )
}