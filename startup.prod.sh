#!/bin/bash
export PATH=$PATH:/usr/local/bin
export NODE_PATH=/usr/local/share/node
export USER=bloger
export HOME=/home/bloger
. $HOME/.nvm/nvm.sh

nvm use v8.9.4

rm -rf /home/bloger/blog-fed/deploy/*
cd /home/bloger/blog-fed/deploy

cp ../confs/db.config.js server/config
cp ../confs/configVo.js server

yarn install
pm2 start pm2.json