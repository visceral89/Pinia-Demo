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
<style scoped>
form {
	padding: 20px 0;
	border: 0;
	padding: 1rem;
	color: hsl(0, 0%, 33%);
	font-size: 1rem;

	button {
		background: #ffd859;
		border: 0;
		border-radius: 6px;
		padding: 1rem;
		cursor: pointer;
	}
	input {
		padding: 1rem;
		border: 0;
		margin: 1rem;
		color: hsl(0, 0%, 33%);
	}
}
</style>
