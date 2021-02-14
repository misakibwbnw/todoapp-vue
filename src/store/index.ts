import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface State {
  tasks: Task[];
}
interface Task {
  id: number;
  done: boolean;
  text: string;
}

export default new Vuex.Store({
  state: {
    tasks: [] as Task[]
  },
  mutations: {
    saveTask(state: State, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    addTask({ commit, state }, data) {
      let maxId = 0;
      if (state.tasks.length !== 0) {
        maxId = Math.max(...state.tasks.map(task => task.id)) + 1;
      }

      state.tasks.push({
        id: maxId,
        done: false,
        text: data
      });

      commit("saveTask", state.tasks);
    },
    changeDone({ commit, state }, data: Task) {
      const target = state.tasks.find(i => {
        return i.id === data.id;
      });
      if (target) target.done = data.done;
      commit("saveTask", state.tasks);
    }
  },
  getters: {
    tasks: (state: State) => state.tasks
  }
  // modules: {}
});
