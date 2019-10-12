<script>
	import {crossfade, slide} from 'svelte/transition';
	import {flip} from 'svelte/animate';
    import {quintOut} from 'svelte/easing';
	import MdAddCircle from 'svelte-icons/md/MdAddCircle.svelte'
	import Todo from './Todo.svelte';

	let newItem = '';

	$: newItemTrimmed = newItem.trim();

	const addTodo = () => {
		todos = [{id: todos.length, name: newItemTrimmed, done: false}, ...todos];
		newItem = '';
	};

	const removeTodo = i => todos = [...todos.slice(0, i), ...todos.slice(i + 1)];

    const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node),
				transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

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


{#each todos as todo, i (todo.id)}
	<div in:receive="{{key: todo.id}}" out:send="{{key: todo.id}}" animate:flip="{{duration: 200}}">
		<Todo {todo} on:remove={() => removeTodo(i)} />
	</div>
{/each}