<script>
    import {createEventDispatcher} from 'svelte';
    
    const dispatch = createEventDispatcher();

    const toggleDone = () => todo.done = !todo.done;

    export let todo;
</script>

<style>
    div {
        padding: 8px 12px;
        user-select: none;
        cursor: pointer;
    }

    div:hover {
        background-color: #eee;
    }

    .name {

    }

    .crossed {
        text-decoration: line-through;
    }

    .remove {
        float: right;
    }
</style>

<div on:click={toggleDone}>
    <span class="name" class:crossed={todo.done}>{todo.name}</span>
    {#if todo.done}
        <span class="remove" on:click|stopPropagation={() => dispatch('remove')}>remove</span>
    {/if}
</div>