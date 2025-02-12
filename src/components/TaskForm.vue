<script lang="ts">
import { defineComponent } from "vue";
import { useTaskStore } from "../stores/TaskStore";
export default defineComponent({
	data() {
		return { taskStore: useTaskStore };
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
