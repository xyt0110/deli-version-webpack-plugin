class DeliVersionWebpackPlugin {
  constructor(options) {
    this.options = Object.assign({}, {
      name: 'version.txt',
      content: '0.0.1'
    }, options)
  }

  apply (compiler) {
    compiler.hooks.emit.tapAsync('DeliVersionWebpackPlugin', (compilation, callback) => {
      compilation.assets[this.options.name] = {
        source: () => this.options.content,
        size: () => this.options.content.length
      }
      callback()
    })
  }
}

module.exports = DeliVersionWebpackPlugin
