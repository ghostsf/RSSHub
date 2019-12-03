const got = require('@/utils/got');
const cheerio = require('cheerio');

module.exports = async (ctx) => {
    const response = await got({
        method: 'get',
        url: 'http://weibomn.com',
        headers: {
            Referer: 'http://weibomn.com',
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
                    const imgUrl = item.find('img').first();
                    return {
                        title: imgUrl.attr('aria-label'),
                        description: `<img src="http://weibomn.com${imgUrl.attr('src')}">`,
                        link: 'http://weibomn.com' + imgUrl.attr('href'),
                    };
                })
                .get(),
    };
};
