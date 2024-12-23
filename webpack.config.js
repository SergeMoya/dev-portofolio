module.exports = {
  resolve: {
    fallback: {
      "path": false
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /@mediapipe\/tasks-vision/
        ]
      }
    ]
  },
  ignoreWarnings: [
    {
      module: /@mediapipe\/tasks-vision/,
    }
  ]
}; 