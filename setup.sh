#!/bin/bash
if [ ! -e .husky ] && [ -e .env ]; then
  CURRENT_ENVIRONMENT=$(grep -E "^NEXT_PUBLIC_NODE_ENV=" .env | cut -d '=' -f2-)
  if [ $CURRENT_ENVIRONMENT == "development" ]; then
    npx husky install
    husky add .husky/pre-commit "yarn prettier && yarn lint && git add -A" &&
    husky add .husky/pre-push "yarn build" &&
    husky add .husky/commit-msg "npx --no -- commitlint --edit"
  else
    echo "!!! Not development mode !!!"
  fi
elif [ -e .husky ]; then
  echo "+++ Husky folder already exists +++"
else
  echo "!!! Can not find .env file !!!"
fi