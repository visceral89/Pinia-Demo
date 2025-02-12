import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

interface Task {
	id: string;
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
			{ id: uuidv4(), title: "Buy Milk", isImportant: false },
			{ id: uuidv4(), title: "Warhammer Night", isImportant: true },
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
		deleteTask(id: string) {
			this.tasks = this.tasks.filter((t) => {
				return t.id !== id;
			});
		},
		importantTask(id: string) {
			const task = this.tasks.find((t) => t.id === id);
			if (!task) return;
			task.isImportant = !task.isImportant;
		},
		addTask(task: Task) {
			this.tasks.push(task);
		},
	},
});
