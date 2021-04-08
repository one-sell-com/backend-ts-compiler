import { registerHelper } from 'handlebars';

registerHelper('nuller', function (conditional) {
    return conditional === 'baseProto.NullResponse' ? 'void' : conditional;
});
