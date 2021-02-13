<template>
  <v-container style="max-width: 500px">
    <v-text-field v-model="newTask" label="Add Task" solo @keydown.enter="add">
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" @click="add">mdi-plus</v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

interface TodoTask {
  done: boolean;
  text: string;
}
interface HTMLEvent extends Event {
  keyCode: number;
}

export default Vue.extend({
  name: "AddTask",
  props: {},
  data() {
    return {
      newTask: ""
    };
  },
  computed: {
    ...mapGetters(["tasks"])
  },
  methods: {
    add(event: HTMLEvent) {
      if (event.keyCode !== 13 || this.newTask === "") return;

      const tasks = this.tasks;
      tasks.push({
        done: false,
        text: this.newTask
      });

      this.addTask(tasks);
      this.newTask = "";
    },
    ...mapActions(["addTask"])
  }
});
</script>
