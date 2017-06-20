#!/bin/bash
cd ~/github/wotfing
rsync -av --progress api ~/heroku/wotfing --exclude node_modules
cd ~/heroku/wotfing/api
git add .
git commit -m 'auto deploy'
git push heroku master
heroku logs
cd ~/github/wotfing/deploy/api/heroku
