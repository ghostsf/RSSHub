const axios = require('../../utils/axios');
const cheerio = require('cheerio');
const config = require('../../config');

module.exports = async (ctx) => {
    const response = await axios({
        method: 'get',
        url: 'http://weibomn.com',
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://weibomn.com'
        },
    });

    const $ = cheerio.load(response.data);

    const list = $('.post-grid-image');

    ctx.state.data = {
        title: 'weibomn Pics',
        link: 'http://weibomn.com',
        item:
            list &&
            list
                .map((index, item) => {
                    item = $(item);
                    const imgUrl = item.find('img-fluid"');
                    return {
                        title: imgUrl.attr('aria-label'),
                        description: `<img src="${imgUrl.data('src')}">`,
                        link: 'http://weibomn.com' + imgUrl.attr('href'),
                    };
                })
                .get(),
    };
};
