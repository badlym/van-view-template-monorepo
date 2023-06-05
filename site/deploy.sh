#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git remote add origin https://github.com/van-view-tempalte/doc.git
git add -A
git commit -m 'deploy'

# 推送到 master 分支
git push -f origin master

# cd -
