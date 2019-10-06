<script>
	import Todo from './Todo.svelte';

	let newItem = '';

	$: newItemTrimmed = newItem.trim();

	const addTodo = () => {
		todos = [{name: newItemTrimmed, done: false}, ...todos];
		newItem = '';
	};

	const removeTodo = i => todos = [...todos.slice(0, i), ...todos.slice(i + 1)];

	export let todos;
</script>

<style>
	form {
		display: flex;
	}

	input {
		flex: 1;
	}
</style>

<form on:submit|preventDefault>
	<input bind:value={newItem} type="text" placeholder="New item" autofocus /> <button disabled={!newItemTrimmed.length} on:click={addTodo}>Add</button>
</form>


{#each todos as todo, i}
	<Todo {todo} on:remove={() => removeTodo(i)} />
{/each}