interface IFormData {
  productName: string,
  productImage: string,
  scrapeWebsites: IScrapeWebsites[]
}

interface IScrapeWebsites {
  website?: string,
  priceSelector?: string
}


export async function postData(formData: IFormData) {
  const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      cache: "no-cache",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  });

  return response.json();
}
