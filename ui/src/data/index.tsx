import scrapersData from "../../../mocks/scrapers.json";

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

export const getScrapers = () => scrapersData;
