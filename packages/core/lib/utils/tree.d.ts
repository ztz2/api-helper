/**
 * 遍历 tree
 * @param {object[]} tree
 * @param {function} cb - 回调函数[(item: any) => unknown]
 * @param {string} children - 子节点 字段名
 * @param {string} mode - 遍历模式，DFS：深度优先遍历 BFS：广度优先遍历
 * @return {void}
 */
export declare function treeForEach(tree: any[] | undefined, cb: Function, children?: string, mode?: string): void;
/**
 * tree 转 数组
 * @param {object[]} tree
 * @param {string} options.children - 子节点 字段名
 * @param {string} options.mode - 遍历模式，DFS：深度优先遍历 BFS：广度优先遍历
 * @param {boolean} options.clear - 是否清楚子集
 * @return {array}
 */
export declare function treeToList(tree?: never[], options?: {}): any[];
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
export declare function listToTree(list?: never[], options?: {}): any;
/**
 * 树结构进行ID进行过滤，返回选中的ID数据结构
 * @param {object[]} tree
 * @param {Array<string>} 选中的节点ID
 * @param {object[]} tree 选中ID的树结构，包含所有父节点
 */
export declare function treeFilterByIds(tree?: never[], ids?: never[]): any;
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
export declare function treeFindParentNodes(tree: never[] | undefined, node: any, options: any): any;
export declare function treeMap(tree: any[] | undefined, cb: Function, children?: string, updateChildrenKey?: string): any[];
