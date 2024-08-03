const axios = require("axios")
const fs = require("fs")
const cheerio= require("cheerio")
const xlsx = require("xlsx")

const pageUrl = "https://www.amazon.com/s?k=phone&page=2&crid=18EUYBSP7O1SQ&qid=1702535235&sprefix=phon%2Caps%2C280&ref=sr_pg_2"

const getPageData = async ()=>{
    try {
        const response = await axios.get(pageUrl)
        const data = response.data
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// getPageData();

const pageData = fs.readFileSync("getData.txt");
// console.log(pageData.toString());

const $ = cheerio.load(pageData.toString())
// console.log( typeof $);
// console.log($);

const titleData = []

const titles = $(".a-size-medium.a-color-base.a-text-normal")
// console.log(titles);

titles.each((idx, ele)=>{
    const title = $(ele).text()
    // titleData.push({
    //     name: title,
    // })
    titleData.push(title)
    // console.log(ele);
    // console.log(title);
})


const pricesData = [];

const prices = $(".a-price-whole")
// console.log(prices);
prices.each((idx, ele)=>{
    const price = $(ele).text();
    // console.log(price);
    pricesData.push(price);
})


// console.log(pricesData);
// console.log(titleData);

const productsJSON = titleData.map((title, idx)=>{
    return {
        title,
        price: pricesData[idx]
    }
}) 
// console.log(productsJSON);

// creting a json file for data
// fs.writeFileSync("products.json", JSON.stringify(productsJSON))


// Excel
const workbook = xlsx.utils.book_new();
const sheet = xlsx.utils.json_to_sheet(productsJSON);

// connect
xlsx.utils.book_append_sheet(workbook, sheet, "Products")

xlsx.writeFile(workbook, "products.xlsx")
console.log("Added SuccessFully");
