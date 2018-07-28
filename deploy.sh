mkdir ~/deploy
cd ~/blog-front

cp -r ./dist ../deploy
cp -r ./config ../deploy
cp -r ./middleware ../deploy
cp -r ./server ../deploy
cp -r ./build ../deploy
cp ./index.js ../deploy
cp ./server.js ../deploy
cp ./pm2.json ../deploy
cp ./package.json ../deploy
cp ./startup.prod.sh ../deploy

scp -r ~/deploy bloger@116.62.172.253:/home/bloger/blog-fed/

ssh bloger@116.62.172.253 "cd /home/bloger/blog-fed/deploy && sh startup.prod.sh"
