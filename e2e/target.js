import { Component } from 'react'
import { render } from 'react-dom'
import jQyery from 'jquery'

class MyComponent extends React {
  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    return <h1>{'hello'}</h1>
  }
}

render(<MyComponent />, document.getElementById('app'))
