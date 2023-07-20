var rules = new Map();
rules.set('必须包含 paths 属性', function (document) {
    try {
        if ('paths' in document) {
            return true;
        }
        // 可能不是对象类型
    }
    catch (_a) {
        return false;
    }
});
export function validateOpenAPIDocument(document) {
    if (!document) {
        return false;
    }
    var errors = [];
    rules.forEach(function (rule, errorMeg) {
        var res = rule(document);
        if (!res) {
            errors.push(errorMeg);
        }
    });
    return errors.length === 0;
}
export function validateSchema(schema) {
    if (schema === void 0) { schema = {}; }
    return schema && Object.keys(schema).length > 0;
}
