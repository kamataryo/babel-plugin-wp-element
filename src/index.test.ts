import test from 'ava'
import * as babel from '@babel/core'
import wpElement from './'

test('imported react to wp.element', async t => {
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

test('imported react-dom to wp.element', async t => {
  const from = `
    import { render } from "react-dom"
    import A from "a"
  `
  const expected =
    'import { render } from "@wordpress/element";\nimport A from "a";'
  const result = await babel.transformAsync(from, {
    plugins: [[wpElement]]
  })
  const actual = (result || {}).code || ''
  t.is(actual, expected)
})

test('required react to wp.element', async t => {
  const from = `
    const React = require("react")
    const A = require("a")
  `
  const expected =
    'const React = require("@wordpress/element");\n\nconst A = require("a");'
  const result = await babel.transformAsync(from, {
    plugins: [[wpElement, { reactify: false }]]
  })
  const actual = (result || {}).code || ''
  t.is(actual, expected)
})

test('required react-dom to wp.element', async t => {
  const from = `
    const { render } = require("react-dom")
    const A = require("a")
  `
  const expected =
    'const {\n  render\n} = require("@wordpress/element");\n\nconst A = require("a");'
  const result = await babel.transformAsync(from, {
    plugins: [[wpElement]]
  })
  const actual = (result || {}).code || ''
  t.is(actual, expected)
})
