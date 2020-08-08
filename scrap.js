const scrape = require('website-scraper');

let options = {
    urls: ['https://comienzatufuturo.com/curso/94672/'],
    directory: './source-code',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
