import { cleanup, render } from '@testing-library/svelte';
import Todo from './Todo.svelte';

describe('Todo', () => {
    afterEach(cleanup);

    const name = 'water plants';

    test('should render not done', () => {
        const { getByText } = render(Todo, {
            props: { todo: { name, done: false } }
        });
        expect(getByText(name));
    });

    test('should render done', () => {
        const { getByText } = render(Todo, {
            props: { todo: { name, done: true } }
        });
        expect(getByText(name));
        expect(document.querySelector('.remove-icon')).not.toBeNull();
    });
});
