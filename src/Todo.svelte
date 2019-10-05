<script>
    import {createEventDispatcher} from 'svelte';
    
    const dispatch = createEventDispatcher();

    const toggleDone = () => todo.done = !todo.done;

    export let todo;
</script>

<style>
    div {
        user-select: none;
    }

    .name {

    }

    .cross {
        text-decoration: line-through;
    }
</style>

<div on:click={toggleDone}>
    <span class="name" class:cross={todo.done}>{todo.name}</span>
    {#if todo.done}
        <span on:click|stopPropagation={() => dispatch('remove')}>remove</span>
    {/if}
</div>