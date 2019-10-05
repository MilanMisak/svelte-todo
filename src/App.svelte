<script>
	export let todos;
</script>

<style>

</style>

{#each todos as todo}
	<p>{todo.name}</p>
{/each}