'use strict';

const pathFn = require('path');

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.layout === 'post') {
        let slug = data.slug.split(pathFn.sep);
        let title = slug.pop();
        
        data.full_time = data.date.format('YYYYMMDD-HHmmss');
        if (!data.title) {
            data.title = title;
        }
        if (data.categories.length === 0) {
            data.setCategories(slug);
        }
    }
    return data;
});