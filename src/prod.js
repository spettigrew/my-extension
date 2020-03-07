entry: {
    app: [require.resolve('./polyfills'), paths.appIndexJs],
        content: [require.resolve('./polyfills'), './src/content.js']
}