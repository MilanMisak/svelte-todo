<script>
	import MdAddCircle from 'svelte-icons/md/MdAddCircle.svelte'
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
		align-items: center;
		margin-bottom: 10px;
	}

	input {
		flex: 1;
		margin: 0;
	}

	button {
		margin: 0;
		padding: 0;
		height: 30px;
		border: none;
		background: none;
		cursor: pointer;
	}
</style>

<form on:submit|preventDefault>
	<input bind:value={newItem} type="text" placeholder="I want to" autofocus />
	<button disabled={!newItemTrimmed.length} on:click={addTodo}>
		<MdAddCircle />
	</button>
</form>


{#each todos as todo, i}
	<Todo {todo} on:remove={() => removeTodo(i)} />
{/each}