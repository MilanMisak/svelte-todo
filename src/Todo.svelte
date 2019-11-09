<script>
    import { createEventDispatcher } from 'svelte';
    import MdCheckCircle from 'svelte-icons/md/MdCheckCircle.svelte';
    import MdRadioButtonUnchecked from 'svelte-icons/md/MdRadioButtonUnchecked.svelte';
    import MdRemoveCircleOutline from 'svelte-icons/md/MdRemoveCircleOutline.svelte';

    const dispatch = createEventDispatcher();

    const toggleDone = () => (todo.done = !todo.done);

    export let todo;
</script>

<style>
    .todo {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        user-select: none;
        cursor: pointer;
    }
    .todo:hover {
        background-color: #eee;
    }

    .icon {
        height: 25px;
    }

    .name {
        flex: 1;
        padding: 0 10px;
    }

    .crossed {
        text-decoration: line-through;
    }

    .remove-icon:hover {
        color: #d00;
    }
</style>

<div class="todo" on:click={toggleDone}>
    <span class="icon check-icon">
        {#if todo.done}
            <MdCheckCircle />
        {:else}
            <MdRadioButtonUnchecked />
        {/if}
    </span>
    <span class="name" class:crossed={todo.done}>{todo.name}</span>
    {#if todo.done}
        <div
            class="icon remove-icon"
            on:click|stopPropagation={() => dispatch('remove')}>
            <MdRemoveCircleOutline />
        </div>
    {/if}
</div>
