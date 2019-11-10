import App from './App.svelte';

const todos = [];

const app = new App({
    target: document.body,
    props: {
        todos
    }
});

export default app;
