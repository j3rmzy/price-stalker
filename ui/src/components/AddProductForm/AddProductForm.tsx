import { Typography } from "@mui/material";
import StyledTextField from "../Styled/TextField";

export default function AddProductForm() {
    return (
        <>
            <Typography variant="h6" component="h1">Add Product</Typography>
            <StyledTextField label="Product Name"/>
        </>
    )
}