import { registerHelper } from 'handlebars';

registerHelper('stub', function (conditional) {
    return conditional.replace(/Service/g, 'Stub').replace(/Controller/g, 'Stub');
});
