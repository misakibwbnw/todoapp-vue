<template>
  <div>
    <AddTask />
    <TaskList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AddTask from "@/components/AddTask.vue";
import TaskList from "@/components/TaskList.vue";

export default Vue.extend({
  name: "List",
  components: {
    AddTask,
    TaskList
  },
  data: () => ({
    //
  })
});
</script>
