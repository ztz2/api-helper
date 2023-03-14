import { ref } from 'vue';

export function useAsyncTasks() {
  let exeAsyncTaskNum = 0;
  const loading = ref(false);
  const execAsyncTasks = async (tasks: Array<Promise<any>>) => {
    loading.value = true;
    exeAsyncTaskNum++;
    return await Promise.all(tasks).finally(() => {
      exeAsyncTaskNum--;
      if (exeAsyncTaskNum === 0) {
        loading.value = false;
      }
    });
  };
  return {
    loading,
    execAsyncTasks,
  };
}
