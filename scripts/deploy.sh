#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote &&
git remote add origin git@github.com:KuangdangLi/drizzle-accountBook-React.git &&
git push -u origin master -f
cd ../