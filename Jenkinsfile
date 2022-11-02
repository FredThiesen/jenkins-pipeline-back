// create jenkins job to run node app
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
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