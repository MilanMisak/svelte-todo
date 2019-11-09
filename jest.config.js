module.exports = {
    transform: {
      '\\.js$': 'babel-jest',
      '\\.svelte$': 'svelte-jest'
    },
    transformIgnorePatterns: [],
    moduleFileExtensions: ['js', 'svelte'],
    bail: false,
    verbose: true
};