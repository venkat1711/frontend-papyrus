pipeline {
  agent any
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/venkat1711/papyrus-frontend.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}
