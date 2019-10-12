import App from './App.svelte';

const todos = [{
    id: 0,
    name: 'Water plants',
    done: false
}, {
    id: 1,
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
