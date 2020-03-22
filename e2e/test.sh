#!/usr/bin/env bash

RESULT=$(npx babel ./e2e/target.js)

if [[ $RESULT != *"require(\"@wordpress/element\")"* ]]; then
  echo 'failed: require("@wordpress/element") should exist.'
  exit 1
fi

if [[ $RESULT == *"require(\"react\")"* ]]; then
  echo 'failed: require("react") should not exist.'
  exit 1
fi

if [[ $RESULT != *"require(\"jquery\")"* ]]; then
  echo 'failed: require("jquery") should exist.'
  exit 1
fi

if [[ $RESULT == *"react-dom"* ]]; then
  echo 'failed: "react-dom" should not exist.'
  exit 1
fi

if [[ $RESULT == *"react"* ]]; then
  echo 'failed: "react" should not exist.'
  exit 1
fi

echo 'success'
exit 0
