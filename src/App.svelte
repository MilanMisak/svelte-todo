<script>
	import Todo from './Todo.svelte';

	let newItem = '';

	const addTodo = () => {
		console.log(newItem);
		if (newItem.trim().length) {
			todos = [{name: newItem.trim(), done: false}, ...todos];
			newItem = '';
		}
	};

	const removeTodo = i => todos = [...todos.slice(0, i), ...todos.slice(i + 1)];

	export let todos;
</script>

<style>

</style>

<form on:submit|preventDefault>
	<input bind:value={newItem} type="text" placeholder="New item" autofocus /> <button on:click={addTodo}>Add</button>
</form>


{#each todos as todo, i}
	<Todo {todo} on:remove={() => removeTodo(i)} />
{/each}