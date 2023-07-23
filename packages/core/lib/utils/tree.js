"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeMap = exports.treeFindParentNodes = exports.treeFilterByIds = exports.listToTree = exports.treeToList = exports.treeForEach = void 0;
var lodash_1 = require("lodash");
var util_1 = require("./util");
/**
 * 遍历 tree
 * @param {object[]} tree
 * @param {function} cb - 回调函数[(item: any) => unknown]
 * @param {string} children - 子节点 字段名
 * @param {string} mode - 遍历模式，DFS：深度优先遍历 BFS：广度优先遍历
 * @return {void}
 */
function treeForEach(tree, cb, children, mode) {
    if (tree === void 0) { tree = []; }
    if (children === void 0) { children = 'children'; }
    if (mode === void 0) { mode = 'DFS'; }
    if (!Array.isArray(tree)) {
        throw new TypeError('tree is not an array');
    }
    if (typeof children !== 'string') {
        throw new TypeError('children is not a string');
    }
    if (children === '') {
        throw new Error('children is not a valid string');
    }
    // 深度优先遍历 depth first search
    function DFS(treeData) {
        var e_1, _a;
        if (treeData === void 0) { treeData = []; }
        try {
            // eslint-disable-next-line
            for (var treeData_1 = __values(treeData), treeData_1_1 = treeData_1.next(); !treeData_1_1.done; treeData_1_1 = treeData_1.next()) {
                var item = treeData_1_1.value;
                cb(item);
                if (Array.isArray(item === null || item === void 0 ? void 0 : item[children])) {
                    DFS(item[children]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (treeData_1_1 && !treeData_1_1.done && (_a = treeData_1.return)) _a.call(treeData_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    // 广度优先遍历 breadth first search
    function BFS(treeData) {
        if (treeData === void 0) { treeData = []; }
        var queen = treeData;
        while (queen.length > 0) {
            var item = queen.shift();
            cb(item);
            // @ts-ignore
            if (Array.isArray(item === null || item === void 0 ? void 0 : item[children])) { // @ts-ignore
                queen.push.apply(// @ts-ignore
                queen, __spreadArray([], __read(item[children]), false));
            }
        }
    }
    if (mode === 'BFS') {
        BFS(tree);
    }
    else {
        DFS(tree);
    }
}
exports.treeForEach = treeForEach;
/**
 * tree 转 数组
 * @param {object[]} tree
 * @param {string} options.children - 子节点 字段名
 * @param {string} options.mode - 遍历模式，DFS：深度优先遍历 BFS：广度优先遍历
 * @param {boolean} options.clear - 是否清楚子集
 * @return {array}
 */
function treeToList(tree, options) {
    if (tree === void 0) { tree = []; }
    if (options === void 0) { options = {}; }
    var _a = (0, lodash_1.merge)({
        mode: 'DFS',
        clear: true,
        children: 'children',
    }, options), mode = _a.mode, clear = _a.clear, children = _a.children;
    if (!Array.isArray(tree)) {
        throw new TypeError('tree is not an array');
    }
    if (typeof children !== 'string') {
        throw new TypeError('children is not a string');
    }
    if (children === '') {
        throw new Error('children is not a valid string');
    }
    tree = (0, lodash_1.cloneDeep)(tree); // @ts-ignore
    var list = []; // @ts-ignore
    treeForEach(tree, function (item) {
        // 深拷贝一份，避免将children数组置空时候影响原数据
        list.push((0, lodash_1.cloneDeep)(item));
    }, children, mode);
    if (clear) { // @ts-ignore
        list.forEach(function (item) {
            item.children = [];
        });
    } // @ts-ignore
    return list;
}
exports.treeToList = treeToList;
/**
 * 数组 转 tree
 * @param {object[]} list
 * @param {object} options
 * @param {string|number|null|undefined} options.rootID - 根节点ID
 * @param {string|number|function} options.id - 唯一标识 字段名
 * @param {string|number|function} options.pid - 父节点ID 字段名
 * @param {string} options.children - 子节点 字段名
 * @return {array}
 */
function listToTree(list, options) {
    if (list === void 0) { list = []; }
    if (options === void 0) { options = {}; }
    var _a = (0, lodash_1.merge)({
        rootID: null,
        id: 'id',
        pid: 'parentId',
        children: 'children', // 子节点 字段
    }, options || {}), rootID = _a.rootID, id = _a.id, pid = _a.pid, children = _a.children;
    if (!Array.isArray(list)) {
        throw new TypeError('list is not an array');
    }
    if (typeof children !== 'string') {
        throw new TypeError('children is not a string');
    }
    if (children === '') {
        throw new Error('children is not a valid string');
    }
    list = (0, lodash_1.cloneDeep)(list);
    var tree = [];
    var map = list.reduce(function (res, item) {
        var currentId = typeof id === 'function' ? id(item) : item[id];
        res.set(currentId, item);
        return res;
    }, new Map());
    Array.from(map.keys()).forEach(function (key) {
        var node = map.get(key); // @ts-ignore
        var parentId = typeof pid === 'function' ? pid(node) : node[pid];
        if (parentId === rootID) { // 一级节点，直接添加到 tree
            tree.push(node);
        }
        else { // 非一级节点，查找父级，并添加到父级 children 中
            var pNode = map.get(parentId);
            if (pNode) {
                if (Array.isArray(pNode[children])) {
                    pNode[children].push(node);
                }
                else {
                    pNode[children] = [node];
                }
            }
            else {
                tree.push(node);
            }
        }
    });
    return tree;
}
exports.listToTree = listToTree;
/**
 * 树结构进行ID进行过滤，返回选中的ID数据结构
 * @param {object[]} tree
 * @param {Array<string>} 选中的节点ID
 * @param {object[]} tree 选中ID的树结构，包含所有父节点
 */
function treeFilterByIds(tree, ids) {
    var e_2, _a;
    if (tree === void 0) { tree = []; }
    if (ids === void 0) { ids = []; }
    var treeList = treeToList((0, lodash_1.cloneDeep)(tree));
    var result = [];
    var getNodeById = function (id) {
        var e_3, _a;
        var result = [];
        while (id) {
            var up = false;
            try {
                for (var treeList_1 = (e_3 = void 0, __values(treeList)), treeList_1_1 = treeList_1.next(); !treeList_1_1.done; treeList_1_1 = treeList_1.next()) {
                    var tree_1 = treeList_1_1.value;
                    if (tree_1.id === id) {
                        result.push(tree_1);
                        id = tree_1.parentId;
                        up = true;
                        break;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (treeList_1_1 && !treeList_1_1.done && (_a = treeList_1.return)) _a.call(treeList_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (!up) {
                break;
            }
        }
        return result;
    };
    try {
        for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var id = ids_1_1.value;
            result = __spreadArray(__spreadArray([], __read(result), false), __read(getNodeById(id)), false);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return listToTree((0, lodash_1.uniq)(result));
}
exports.treeFilterByIds = treeFilterByIds;
/**
 * tree 寻找所有父级几点
 * @param {object[]} tree
 * @param {treeNode} node - 当前节点
 * @param {string|number|null|undefined} options.rootID - 根节点ID
 * @param {string|number|function} options.id - 唯一标识 字段名
 * @param {string|number|function} options.pid - 父节点ID 字段名
 * @param {string} options.children - 子节点 字段名
 * @return {array}
 */
function treeFindParentNodes(tree, node, options) {
    if (tree === void 0) { tree = []; }
    var _a = (0, lodash_1.merge)({
        rootID: null,
        id: 'id',
        pid: 'parentId',
        children: 'children', // 子节点 字段
    }, options), id = _a.id, pid = _a.pid;
    var result = [];
    if (!Array.isArray(tree) || !node || !(0, util_1.checkType)(node, 'Object')) {
        return result;
    } // @ts-ignore
    tree = treeToList((0, lodash_1.cloneDeep)(tree));
    var p = typeof pid === 'function' ? pid(node) : node[pid];
    while (p) {
        for (var i = 0; i < tree.length; i++) {
            var t = tree[i];
            var d = typeof id === 'function' ? id(t) : t[id];
            if (p === d) {
                result.unshift(t);
                p = typeof pid === 'function' ? pid(t) : t[pid];
                break;
            }
            if (i === tree.length - 1) {
                p = null;
            }
        }
    }
    return result;
}
exports.treeFindParentNodes = treeFindParentNodes;
function treeMap(tree, cb, children, updateChildrenKey) {
    if (tree === void 0) { tree = []; }
    if (children === void 0) { children = 'children'; }
    if (updateChildrenKey === void 0) { updateChildrenKey = 'children'; }
    if (!Array.isArray(tree)) {
        throw new TypeError('tree is not an array');
    }
    if (typeof children !== 'string') {
        throw new TypeError('children is not a string');
    }
    if (children === '') {
        throw new Error('children is not a valid string');
    }
    function dfs(treeData) {
        var e_4, _a;
        if (treeData === void 0) { treeData = []; }
        var result = [];
        try {
            for (var treeData_2 = __values(treeData), treeData_2_1 = treeData_2.next(); !treeData_2_1.done; treeData_2_1 = treeData_2.next()) {
                var item = treeData_2_1.value;
                result.push(cb ? cb(item) : item);
                if (Array.isArray(item[children])) {
                    // @ts-ignore
                    item[updateChildrenKey] = dfs(item[children]);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (treeData_2_1 && !treeData_2_1.done && (_a = treeData_2.return)) _a.call(treeData_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result.filter(Boolean);
    }
    return dfs(tree);
}
exports.treeMap = treeMap;
