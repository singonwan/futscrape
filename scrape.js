const request = require('request');
const cheerio = require('cheerio');

request(
    `https://www.futbin.com/20/player/291/kevin-de-bruyne`,
    (error, response, html) => {
        if ((!error, response.statusCode === 200)) {
            let $ = cheerio.load(html);

            let pageInfo = $('#page-info');

            let dataBaseId = pageInfo.attr('data-baseid');

            console.log(dataBaseId);
        }
    }
);
