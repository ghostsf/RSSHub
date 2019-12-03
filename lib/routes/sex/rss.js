const got = require('@/utils/got');
const cheerio = require('cheerio');

// https://www.sex.com/pics/?sort=popular&sub=week

module.exports = async (ctx) => {
    const response = await got({
        method: 'get',
        url: 'https://www.sex.com/pics/?sort=popular',
        headers: {
            Referer: 'https://www.sex.com',
        },
    });

    const $ = cheerio.load(response.data);

    const list = $('.small_pin_box');

    ctx.state.data = {
        title: 'sex-Porn Pics',
        link: 'https://www.sex.com',
        item:
            list &&
            list
                .map((index, item) => {
                    item = $(item);
                    const imgUrl = item.find('a.image_wrapper img').first();
                    return {
                        title: imgUrl.attr('alt'),
                        description: `<img src="${imgUrl.data('src').replace('https://images.sex.com', 'http://127.0.0.1:6699')}">`,
                        link: 'https://www.sex.com' + item.find('a.image_wrapper').attr('href'),
                    };
                })
                .get(),
    };
};
