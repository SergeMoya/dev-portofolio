module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [
        {
          module: /@mediapipe\/tasks-vision/,
        }
      ],
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
      }
    }
  }
}; 