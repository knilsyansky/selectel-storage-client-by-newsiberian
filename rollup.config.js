export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: 'SelectelStorageClient',
    sourcemap: true,
  },
};
