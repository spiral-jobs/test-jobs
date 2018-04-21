SPIRAL WORKS FRONTEND

Features:
- Signin and Signup Setup
- Responsive UI
- Multi-platform capabilites (IOS, Android, Web)

How To:
Development:
- install node.js 8.9.4
- run npm i -g cordova ionic
- run npm i

Unit Test:
- run npm run test / npm run test-coverage

Building:
- Web
  run ionic build

- IOS
  run cordova add platform ios

- Android
  run cordova add platform android

Deployment:
- Web
  - git init
  - heroku login
  - git remote set-url <heroku-app URL>
  - git add .
  - git commit -m "App Deploying"
  - git push heroku master

- Automatic  Heroku Deployment
  - sudo chmod 777 herokuDeployment.sh
  - sh herokuDeployment.sh

- IOS
  compile the app using xcode
- Android
  compile the app using android studio