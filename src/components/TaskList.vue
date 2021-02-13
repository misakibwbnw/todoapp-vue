<template>
  <v-container style="max-width: 500px">
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
import { mapGetters } from "vuex";

interface HTMLEvent extends Event {
  keyCode: number;
}

export default Vue.extend({
  name: "TaskList",
  data() {
    return {
      newTask: ""
    };
  },
  computed: {
    ...mapGetters(["tasks"])
  },
  methods: {}
});
</script>
