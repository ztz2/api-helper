import { cloneDeep, uniq, merge } from 'lodash';
import { checkType } from '@/utils/index';

/**
 * 遍历 tree
 * @param {object[]} tree
 * @param {function} cb - 回调函数[(item: any) => unknown]
 * @param {string} children - 子节点 字段名
 * @param {string} mode - 遍历模式，DFS：深度优先遍历 BFS：广度优先遍历
 * @return {void}
 */
export function treeForEach(tree: any[] = [], cb: Function, children = 'children', mode = 'DFS') {
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
  function DFS(treeData = []) {
    // eslint-disable-next-line
        for (const item of treeData) {
      cb(item);

      if (Array.isArray(item?.[children])) {
        DFS(item[children]);
      }
    }
  }

  // 广度优先遍历 breadth first search
  function BFS(treeData = []) {
    const queen = treeData;

    while (queen.length > 0) {
      const item = queen.shift();

      cb(item);
      // @ts-ignore
      if (Array.isArray(item?.[children])) { // @ts-ignore
        queen.push(...item[children]);
      }
    }
  }
  if (mode === 'BFS') {
    BFS(tree as any);
  } else {
    DFS(tree as any);
  }
}

/**
 * tree 转 数组
 * @param {object[]} tree
 * @param {string} options.children - 子节点 字段名
 * @param {string} options.mode - 遍历模式，DFS：深度优先遍历 BFS：广度优先遍历
 * @param {boolean} options.clear - 是否清楚子集
 * @return {array}
 */
export function treeToList(tree = [], options = {}) {
  const { mode, clear, children } = merge({
    mode: 'DFS',
    clear: true,
    children: 'children',
  }, options);
  if (!Array.isArray(tree)) {
    throw new TypeError('tree is not an array');
  }
  if (typeof children !== 'string') {
    throw new TypeError('children is not a string');
  }
  if (children === '') {
    throw new Error('children is not a valid string');
  }
  tree = cloneDeep(tree); // @ts-ignore
  const list = []; // @ts-ignore
  treeForEach(tree, (item) => {
    // 深拷贝一份，避免将children数组置空时候影响原数据
    list.push(cloneDeep(item));
  }, children, mode);
  if (clear) { // @ts-ignore
    list.forEach((item) => {
      item.children = [];
    });
  } // @ts-ignore
  return list;
}

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
export function listToTree(list = [], options = {}) {
  const {
    rootID, id, pid, children,
  } = merge({
    rootID: null, // 根节点ID，pid === rootID 即为 一级节点
    id: 'id', // 唯一标识
    pid: 'parentId', // 父节点ID 字段
    children: 'children', // 子节点 字段
  }, options || {});

  if (!Array.isArray(list)) {
    throw new TypeError('list is not an array');
  }
  if (typeof children !== 'string') {
    throw new TypeError('children is not a string');
  }
  if (children === '') {
    throw new Error('children is not a valid string');
  }

  list = cloneDeep(list);

  const tree: any = [];
  const map = list.reduce((res, item) => { // @ts-ignore
    const currentId = typeof id === 'function' ? id(item) : item[id];
    res.set(currentId, item);

    return res;
  }, new Map());

  Array.from(map.keys()).forEach((key) => {
    const node = map.get(key); // @ts-ignore
    const parentId = typeof pid === 'function' ? pid(node) : node[pid];
    if (parentId === rootID) { // 一级节点，直接添加到 tree
      tree.push(node);
    } else { // 非一级节点，查找父级，并添加到父级 children 中
      const pNode = map.get(parentId);
      if (pNode) {
        if (Array.isArray(pNode[children])) {
          pNode[children].push(node);
        } else {
          pNode[children] = [node];
        }
      } else {
        tree.push(node);
      }
    }
  });
  return tree;
}

/**
 * 树结构进行ID进行过滤，返回选中的ID数据结构
 * @param {object[]} tree
 * @param {Array<string>} 选中的节点ID
 * @param {object[]} tree 选中ID的树结构，包含所有父节点
 */
export function treeFilterByIds(tree = [], ids = []) {
  const treeList = treeToList(cloneDeep(tree));
  let result: any = [];
  const getNodeById = (id: any) => {
    const result = [];
    while (id) {
      let up = false;
      for (const tree of treeList) {
        if (tree.id === id) {
          result.push(tree);
          id = tree.parentId;
          up = true;
          break;
        }
      }
      if (!up) {
        break;
      }
    }
    return result;
  };
  for (const id of ids) {
    result = [...result, ...getNodeById(id)];
  }
  return listToTree(uniq(result));
}

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
export function treeFindParentNodes(tree = [], node: any, options: any) {
  const { id, pid } = merge({
    rootID: null, // 根节点ID，pid === rootID 即为 一级节点
    id: 'id', // 唯一标识
    pid: 'parentId', // 父节点ID 字段
    children: 'children', // 子节点 字段
  }, options);
  const result: any = [];
  if (!Array.isArray(tree) || !node || !checkType(node, 'Object')) {
    return result;
  } // @ts-ignore
  tree = treeToList(cloneDeep(tree));
  let p = typeof pid === 'function' ? pid(node) : node[pid];
  while (p) {
    for (let i = 0; i < tree.length; i++) {
      const t = tree[i];
      const d = typeof id === 'function' ? id(t) : t[id];
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

export function treeMap(tree: any[] = [], cb: Function, children = 'children', updateChildrenKey = 'children') {
  if (!Array.isArray(tree)) {
    throw new TypeError('tree is not an array');
  }
  if (typeof children !== 'string') {
    throw new TypeError('children is not a string');
  }
  if (children === '') {
    throw new Error('children is not a valid string');
  }
  function dfs(treeData: any[] = []) {
    const result: any[] = [];
    for (const item of treeData) {
      result.push(cb ? cb(item) : item);
      if (Array.isArray(item[children])) {
        // @ts-ignore
        item[updateChildrenKey] = dfs(item[children]);
      }
    }
    return result.filter(Boolean);
  }
  return dfs(tree);
}
