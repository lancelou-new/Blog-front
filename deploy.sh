mkdir ~/deploy
cd ~/blog-front

cp -r ~/dist ../deploy
cp -r ~/config ../deploy
cp -f ~/middleware ../deploy
cp -f ~/server ../deploy
cp ~/index.js ../deploy
cp ~/server.js ../deploy
cp ~/pm2.json ../deploy

scp ~/deploy root@45.76.111.33:/home/lancelou/www/lanceblog
