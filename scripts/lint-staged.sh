#!/bin/bash

git diff --staged --name-only --diff-filter ACMR | grep -E '\^src.+.(js|jsx)$' | xargs $(npm bin)/eslint
RESULT=$?

[ $RESULT -ne 0 ] && exit 1
exit 0

