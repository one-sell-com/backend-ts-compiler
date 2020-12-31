import { registerHelper } from 'handlebars';

registerHelper('common_internal', function (conditional) {
    return conditional.indexOf('Common') > 0 || conditional.indexOf('Internal') > 0;
});
