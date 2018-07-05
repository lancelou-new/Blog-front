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

scp -r ~/deploy root@45.76.111.33:/home/bloger/blog-fed/deploy

# ssh root@45.76.111.33 "cd /home/bloger/blog-fed/deploy && yarn install && pm2 start blogfrontend"
