#!/bin/bash
WEB_PATH='/home/lancelou/www/lanceblog/Blog'
WEB_USER='lancelou'
WEB_USERGROUP='lancelou'
 
echo "Stop Service"
pm2 stop blogfrontend
echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git checkout master
git pull
echo "Install package && Build package"
cd front && npm install && npm run build
cd ..
echo "changing permissions..."
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "Start Service..."
pm2 start blogfrontend
echo "Finished."