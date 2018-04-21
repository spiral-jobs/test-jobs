SPIRAL WORKS TEST BACKEND

Features:
- Authentication
- Database Integration
- Unit Test

How To:
Development
- Set up the database insid ./src/config/config.json
- Install node 8.9.4
- run npm run dev

Unit Testing
- run npm run test

Production
- git init
- heroku login
- git remote set-url <heroku-app URL>
- git add .
- git commit -m "App Deploying"
- git push heroku master

Automatic  Heroku Deployment
- sudo chmod 777 herokuDeployment.sh
- sh herokuDeployment.sh
