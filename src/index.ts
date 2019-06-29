export default function() {
  return {
    visitor: {
      ImportDeclaration(path: any) {
        const { source } = path.node
        if (source.value === 'react' || source.value === 'react-dom') {
          source.value = '@wordpress/element'
        }
      }
    }
  }
}
