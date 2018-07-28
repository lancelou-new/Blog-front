#!/bin/bash
export PATH=$PATH:/usr/local/bin
export NODE_PATH=/usr/local/share/node
export USER=bloger
export HOME=/home/bloger
source $HOME/.nvm/nvm.sh

nvm use v8.9.4
cd /home/bloger/blog-fed/deploy
yarn install
pm2 start blogfrontend
