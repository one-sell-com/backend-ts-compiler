import { registerHelper } from 'handlebars';

registerHelper('client', function (conditional) {
    return conditional.replace(/Service/g, 'Client').replace(/Controller/g, 'Client');
});
