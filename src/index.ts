import * as Babel from '@babel/core'
import * as t from '@babel/types'

export default function() {
  return {
    visitor: {
      ImportDeclaration(path: Babel.NodePath<t.ImportDeclaration>) {
        const { source } = path.node
        if (source.value === 'react' || source.value === 'react-dom') {
          source.value = '@wordpress/element'
        }
      }
    }
  }
}
