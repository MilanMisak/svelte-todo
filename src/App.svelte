<script>
    import { crossfade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { quintOut } from 'svelte/easing';
    import MdAddCircle from 'svelte-icons/md/MdAddCircle.svelte';
    import MdMoreVert from 'svelte-icons/md/MdMoreVert.svelte';
    import MdClear from 'svelte-icons/md/MdClear.svelte';
    import Todo from './Todo.svelte';

    let newItem = '',
        menuShown = false;

    $: newItemTrimmed = newItem.trim();

    const addTodo = () => {
        todos = [
            { id: todos.length, name: newItemTrimmed, done: false },
            ...todos
        ];
        newItem = '';
    };

    const removeTodo = i =>
        (todos = [...todos.slice(0, i), ...todos.slice(i + 1)]);

    const [send, receive] = crossfade({
        duration: d => Math.sqrt(d * 200),

        fallback(node /*, params*/) {
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

    const toggleMenu = () => (menuShown = !menuShown);

    const clearCompleted = () => {
        todos = todos.filter(todo => !todo.done);
        menuShown = false;
    };

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
        margin: 0 0 0 10px;
        padding: 0;
        height: 30px;
        border: none;
        background: none;
        cursor: pointer;
    }

    .menu {
        padding: 5px;
        position: absolute;
        top: 50px;
        right: 10px;
        background-color: #fff;
        border: 1px solid #555;
    }

    .menu-item {
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
    }

    .inline-icon {
        display: inline-block;
        height: 30px;
        margin-right: 10px;
    }
</style>

<form on:submit|preventDefault>
    <input bind:value={newItem} type="text" placeholder="I want to" autofocus />
    <button disabled={!newItemTrimmed.length} on:click={addTodo}>
        <MdAddCircle />
    </button>
    <button on:click={toggleMenu}>
        <MdMoreVert />
    </button>
</form>

{#each todos as todo, i (todo.id)}
    <div
        in:receive={{ key: todo.id }}
        out:send={{ key: todo.id }}
        animate:flip={{ duration: 200 }}>
        <Todo {todo} on:remove={() => removeTodo(i)} />
    </div>
{/each}

{#if menuShown}
    <div class="menu">
        <div class="menu-item" on:click={clearCompleted}>
            <span class="inline-icon">
                <MdClear />
            </span>
            <span style="flex: 1">Clear Completed</span>
        </div>
    </div>
{/if}
