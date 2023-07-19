/**
 * @description 单例任务调度器
 * @代码说明
 const uniqueTask = new UniqueTask(500);
 // 当多次执行 'task1', 'lost' 的任务，只要前面的任务 closeTask 没有调用释放该任务
 // 后续的执行都将会被忽略
 // 场景：ajax 错误消息提醒
 uniqueTask.dispatch('task1', 'lost', (closeTask: () => void) => {
    // 回调里面执行该任务
    // to do something

    // 任务完成，关闭释放该task
    closeTask();
 });
*/
export default class UniqueTask {
  taskMemo = [] as Array<Map<any, boolean>>;
  duration = 0;
  constructor(duration = 0) {
    this.duration = duration;
  }
  dispatch(...tasks: any[]) {
    const that = this;
    const callback = tasks.pop();
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
      const taskItem = tasks[i];
      if (!(this.taskMemo[i] instanceof Map)) {
        this.taskMemo[i] = new Map();
      }
      if (this.taskMemo[i].get(taskItem) === true) {
        count++;
      } else {
        this.taskMemo[i].set(taskItem, true);
      }
    }
    // 可以执行
    if (count !== tasks.length) {
      // eslint-disable-next-line prefer-arrow-callback
      typeof callback === 'function' && callback?.(function closeTask() {
        const c = () => {
          for (let i = 0; i < tasks.length; i++) {
            that.taskMemo[i]?.delete(tasks[i]);
          }
        };
        that.duration <= 0 ? c() : setTimeout(c, that.duration);
      });
    }
  }
}
