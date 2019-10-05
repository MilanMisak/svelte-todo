import App from './App.svelte';

const todos = [{
	name: 'Water plants',
}, {
	name: 'Take rubbish out'
}];

const app = new App({
	target: document.body,
	props: {
		todos
	}
});

export default app;