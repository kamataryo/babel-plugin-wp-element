import test from 'ava'
import * as babel from '@babel/core'
import wpElement from './'

test('react to wp.element', async t => {
  const from = `
    import React from "react"
    import A from "a"
  `
  const expected = 'import React from "@wordpress/element";\nimport A from "a";'
  const result = await babel.transformAsync(from, {
    plugins: [[wpElement, { reactify: false }]]
  })
  const actual = (result || {}).code || ''
  t.is(actual, expected)
})

test('react-dom to wp.element', async t => {
  const from = `
    import { render } from "react-dom"
    import A from "a"
  `
  const expected =
    'import { render } from "@wordpress/element";\nimport A from "a";'
  const result = await babel.transformAsync(from, {
    plugins: [[wpElement, { reactify: false }]]
  })
  const actual = (result || {}).code || ''
  t.is(actual, expected)
})
