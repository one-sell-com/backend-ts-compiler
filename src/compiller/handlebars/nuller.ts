import { registerHelper } from 'handlebars';

registerHelper('nuller', function (conditional) {
    return  conditional === 'common.NullResponse' || conditional === 'google.protobuf.Empty'  ? 'void' : conditional;
});
