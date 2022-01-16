interface IProductScrapers {
    productWebsite: string,
    productPrice: number,
}

export function getLowestPrice(productScrapers: IProductScrapers[]) {
    let lowestPrice: number | undefined;

    productScrapers.forEach(({ productPrice }: { productPrice: number }) => {
        if (!lowestPrice) {
            lowestPrice = productPrice;
        }

        if (productPrice < lowestPrice) {
            lowestPrice = productPrice;
        }
    })

    return lowestPrice;
}