<template>
  <v-container style="max-width: 500px">
    <v-text-field
      v-model="newTask"
      label="Add Task"
      solo
      @keydown.enter="create"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" @click="create">mdi-plus</v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <!-- <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2> -->

    <v-divider class="mt-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition class="py-0" group>
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                :color="(task.done && 'grey') || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="(task.done && 'grey--text') || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon v-if="task.done" color="success">
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";

interface TodoTask {
  done: boolean,
  text: string
}
interface HTMLEvent extends Event {
  keyCode: number;
}

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      newTask: "",
      tasks: [] as TodoTask[],
      remainingTasks: 0,
      completedTasks: 0,
      progress: 0
    };
  },
  methods: {
    create(event: HTMLEvent) {
      if(event.keyCode !== 13 || this.newTask === "") return
      this.tasks.push({
        done: false,
        text: this.newTask
      });
      this.newTask = ""
    }
  }
});
</script>
