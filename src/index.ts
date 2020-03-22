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
      },
      CallExpression(path: Babel.NodePath<t.CallExpression>) {
        const callee: any = path.node.callee
        const args: any = path.node.arguments
        if (
          callee.name === 'require' &&
          (args[0].value === 'react' || args[0].value === 'react-dom')
        ) {
          args[0].value = '@wordpress/element'
        }
      }
    }
  }
}
