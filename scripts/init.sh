#!/bin/bash

echo '🚀 正在初始化...'
branch=$(git rev-parse --abbrev-ref HEAD)

echo '🏠 正在重建 main 分支'
git checkout --orphan main

echo '🔨 正在安装依赖...'
yarn

git remote remove origin
git remote -v

git add --all
git commit -m "init commit"
echo '✅ 完成初始化提交'

echo '🌀 正在进行垃圾回收'
git branch -D $branch
rm -rf ../scripts/

echo '🎉 一切就绪'

exit 0