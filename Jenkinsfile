// create jenkins job to run node app
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Tests') {
            steps {
                sh 'sudo npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo pm2 restart index.js'
                sh 'sudo pm2 save'
            }
        }
    }
}