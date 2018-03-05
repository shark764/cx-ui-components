#!/bin/bash
npm install --production
npm run build:styleguide
npm run build:library
#mv app/assets/favicons/favicon.ico build/favicon.ico

cd ..
cp -r app/build/* mount
