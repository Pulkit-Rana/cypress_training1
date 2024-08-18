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
        string(name: 'SPEC', defaultValue: 'orangeHRM/specs/**/**', description: 'Find Spec Files')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Set Up Node.js') {
            steps {
                withEnv(["PATH+NODE=${tool name: 'NodeJS', type: 'NodeJSInstallation'}/bin"]) {
                    sh "node -v"
                    sh "npm -v"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "npm install"
            }
        }

        stage('Run Cypress Tests') {
            steps {
                ansiColor('xterm') {
                    sh "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC} --reporter mochawesome --reporter-options reportDir=${REPORT_DIR},overwrite=false,html=true,json=true"
                }
            }
        }

        stage('List Report Directory Contents') {
            steps {
                sh "ls -la ${REPORT_DIR}"
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
