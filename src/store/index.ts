import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface State {
  tasks: Task[];
}
interface Task {
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
    addTask({ commit }, data) {
      commit("saveTask", data);
    }
  },
  getters: {
    tasks: (state: State) => state.tasks
  }
  // modules: {}
});
