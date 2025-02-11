import { defineStore } from "pinia";

interface Task {
	id: number;
	title: string;
	isImportant: boolean;
}

interface TaskState {
	tasks: Task[];
}

export const useTaskStore = defineStore("taskStore", {
	/*

    state = data()
    getters = computed
    actions = methods

    */
	state: (): TaskState => ({
		tasks: [
			{ id: 1, title: "Buy Milk", isImportant: false },
			{ id: 2, title: "Warhammer Night", isImportant: true },
		],
	}),
	getters: {
		getImportant(state): Task[] {
			return state.tasks.filter((t) => t.isImportant);
		},
		impCount(state) {
			return state.tasks.reduce((p, c) => {
				return c.isImportant ? p + 1 : p;
			}, 0);
		},
		totalCount: (state) => {
			return state.tasks.length;
		},
	},
	actions: {
		deleteTask() {},
		importantTask() {},
		addTask(task) {
			task.task.push();
		},
	},
});
