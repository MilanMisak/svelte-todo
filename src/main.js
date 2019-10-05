import App from './App.svelte';

const todos = [{
	name: 'Water plants',
	done: false
}, {
	name: 'Take rubbish out',
	done: true
}];

const app = new App({
	target: document.body,
	props: {
		todos
	}
});

export default app;