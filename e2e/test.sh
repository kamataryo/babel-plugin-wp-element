#!/usr/bin/env bash

RESULT=$(npx babel ./e2e/target.js)

if [[ $RESULT != *"@wordpress/element"* ]]; then
  exit 1
fi

if [[ $RESULT == *"react-dom"* ]]; then
  exit 1
fi

if [[ $RESULT == *"react"* ]]; then
  exit 1
fi

exit 0
