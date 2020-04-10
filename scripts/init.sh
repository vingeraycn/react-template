#!/bin/bash

echo '☝️正在初始化...'
git checkout --orphan master
echo '重建 master 分支'
echo '🔨正在安装依赖...'
yarn
read -p '请输入 git 仓库地址: ' originUrl
git remote remove origin
git remote add origin $originUrl
echo '远端地址切换到: '
git remote -v
git add .
git commit -m "init commit"
echo '🚀完成初始化提交'

rm -rf ../scripts/

exit 0