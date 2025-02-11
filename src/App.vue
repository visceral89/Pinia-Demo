<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
export default defineComponent({
	name: "App",
	data() {
		return { taskStore: useTaskStore() };
	},
	components: { TaskDetails },
	created() {},
});
</script>

<template>
	<header>
		<img src="./assets/pinia-logo.svg.png" alt="pinia logo" />
		<h1>Pinia Tasks</h1>
	</header>
	<main>
		<div class="task-list">
			<div v-for="task in taskStore.tasks">
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
</style>
