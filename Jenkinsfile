import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {
    agent any
    
    environment {
        NODE_VERSION = '20'
        REPORT_DIR = 'reports'
        BUILD_USER = ''
    }
    
    parameters {
        string(name: 'SPEC', defaultValue: 'orangeHRM/specs/**/**', description: 'test: orangeHRM/specs/*.cy.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    options {
        ansiColor('xterm')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Set Up Node.js') {
            steps {
                script {
                    withEnv(["PATH+NODE=${tool name: 'NodeJS', type: 'NodeJSInstallation'}/bin"]) {
                        sh "node -v"
                        sh "npm -v"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh "npm install"
                }
            }
        }

        stage('Build') {
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                script {
                    sh "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC} --reporter mochawesome --reporter-options reportDir=${REPORT_DIR},overwrite=false,html=true,json=true"
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            script {
                BUILD_USER = getBuildUser()
            }
            
            slackSend(
                channel: '#jenkins-example',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\nTests: ${params.SPEC} executed on ${params.BROWSER}\nMore info at: ${env.BUILD_URL}HTML_20Report/"
            )
            
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: true, 
                reportDir: REPORT_DIR, 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: ''
            ])
            
            deleteDir()
        }
    }
}
s
