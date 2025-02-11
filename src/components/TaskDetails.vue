<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: ["task"],
	data() {
		return {};
	},
});
</script>
<template>
	<div class="task">
		<h3>{{ task.title }}</h3>
		<div class="icons">
			<i class="material-icons delete">delete</i>
			<i class="material-icons favorite">favorite</i>
		</div>
	</div>
</template>
<style scoped>
.delete:hover {
	color: hsl(0, 0%, 10%);
}
.favorite:hover {
	color: hsl(0, 70%, 50%);
}
.task h3,
.task .icons {
	display: inline-block;
}

.task {
	padding: 6px 1.5rem;
	background-color: hsl(0, 0%, 100%);
	margin-top: 1rem;
	border-radius: 4px;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: space-between;
	align-items: center;

	.icons {
		text-align: right;
	}
}

i {
	font-size: 1.4rem;
	margin-left: 6px;
	cursor: pointer;
}
</style>
