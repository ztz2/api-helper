import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';
import { Project, IProject } from '@/store/project/interface';

const useProject = defineStore('project', {
  persist: true,
  state: (): {
    data: Array<IProject>
  } => ({
    data: []
  }),

  actions: {
    save(value: Project) {
      const index = this.data.findIndex((itm) => itm.id === value.id);
      if (index !== -1) {
        this.data.splice(index, 1, value)
      } else {
        if (!value.id) {
          value.id = nanoid();
        }
        this.data.push(value);
      }
    },
    delete(value: (Project | string) | Array<Project | string>) {
      value = Array.isArray(value) ? value : [value];
      for (const val of value) {
        const id = typeof val === 'string' ? val : val.id;
        const index = this.data.findIndex((itm) => itm.id === id);
        index !== -1 && this.data.splice(index, 1);
      }
    }
  }
});

export default useProject;
