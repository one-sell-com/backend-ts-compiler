import { registerHelper } from 'handlebars';

registerHelper('ifCommonOrInternal', function (controllerName, options) {
    if (controllerName.indexOf('Common') > 0 || controllerName.indexOf('Internal') > 0) {
        return options.fn(this);
    }
    return options.inverse(this);
});
