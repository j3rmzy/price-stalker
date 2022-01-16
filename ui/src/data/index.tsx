
export interface IProduct {
    productName: string,
    productImage: String,
    productScrapers: IProductScrapers[],
    dateCreated: Date,
    dateLastChecked: Date
}

export interface IProductScrapers {
    productWebsiteName: string,
    productWebsiteURL: string,
    productPrice: number
}

export const getScrapers = () => [
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
