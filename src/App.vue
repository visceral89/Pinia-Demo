<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
export default defineComponent({
	name: "App",
	data() {
		return { taskStore: useTaskStore(), filter: "all" };
	},
	components: { TaskDetails, TaskForm },
	created() {},
});
</script>

<template>
	<header>
		<img src="./assets/pinia-logo.svg.png" alt="pinia logo" />
		<h1>Pinia Tasks</h1>
	</header>
	<div class="new-task-form">
		<TaskForm />
	</div>
	<nav class="filter">
		<button @click="filter = 'all'">All Tasks</button
		><button @click="filter = 'important'">Important Tasks</button>
	</nav>
	<main>
		<div class="task-list" v-if="filter === 'all'">
			<p>You have {{ taskStore.totalCount }} tasks left.</p>
			<div v-for="task in taskStore.tasks">
				<TaskDetails :task="task" />
			</div>
		</div>
		<div class="task-list" v-if="filter === 'important'">
			<p>You have {{ taskStore.impCount }} important tasks left.</p>
			<div v-for="task in taskStore.getImportant">
				<TaskDetails :task="task" />
			</div>
		</div>
	</main>
</template>

<style scoped>
header {
	background: hsl(0, 0%, 90%);
	padding: 1rem;
}
img {
	height: 150px;
}
.task-list {
	max-width: 640px;
	margin: 20px auto;
}

.filter {
	width: 640px;
	margin: 10px auto;
	text-align: center;

	button {
		display: inline-block;
		margin-left: 12px;
		background-color: hsl(0, 0%, 100%);
		border: 2px solid hsl(0, 0%, 35%);
		border-radius: 4px;
		padding: 4px 8px;
		cursor: pointer;
		font-size: 0.8rem;
	}
}
</style>
