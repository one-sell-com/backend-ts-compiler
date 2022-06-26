import { registerHelper } from 'handlebars';

registerHelper('ifInternal', function (controllerName, options) {
    if (controllerName.indexOf('Internal') > 0) {
        return options.fn(this);
    }
    return options.inverse(this);
});
