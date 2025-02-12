<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "../stores/TaskStore";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
	name: "TaskForm",
	data() {
		return { taskStore: useTaskStore(), newTask: "" };
	},
	methods: {
		handleSubmit() {
			if (this.newTask.length > 0) {
				this.taskStore.addTask({
					id: uuidv4(),
					title: this.newTask,
					isImportant: false,
				});
				this.newTask = "";
			}
		},
	},
});
</script>
<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" id="" v-model="newTask" />
		<button>Add</button>
	</form>
</template>
<style scoped></style>
