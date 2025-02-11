import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
	/*

    state = data()
    getters = computed
    actions = methods

    */
	state: () => ({
		tasks: [
			{ id: 1, title: "Buy Milk", isImportant: false },
			{ id: 2, title: "Warhammer Night", isImportant: true },
		],
	}),
});
