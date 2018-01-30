#!groovy​
@Library('sprockets@1.0.0') _

import node.pr
import node.build
import deploy.frontend
import testing.acme

def service = 'cx-ui-components'

node() {
pwd = pwd()
echo pwd
 }

if (pwd ==~ /.*master.*/ ) {
  node() {
    def b = new node.build()
    try {
      timeout(time: 1, unit: 'HOURS') {
        ansiColor('xterm') {
          stage ('SCM Checkout') {
            checkout scm
          }
          stage ('Export Properties') {
            b.export()
            build_version = readFile('version')
            b.setDisplayName("${build_version}")
          }
          stage ('Build') {
            sh 'npm install'
            sh 'npm run build:styleguide'
          }
          stage ('Deploy') {
            node() {
              def d = new deploy.frontend()
              try {
                d.pull("cx-ui-components", "${build_version}") // pull down version of site from s3
                d.versionFile("${build_version}") // make version file
                d.confFile("Style-Guide", "${build_version}") // make conf file
                d.deploy("dev","Style-Guide") // push to s3
              }
              catch(err) {
                // Hipchat Failure
                d.hipchatFailure("${service}", "dev", "${build_version}", "${env.BUILD_USER}")
                echo "Failed: ${err}"
                error "Failed: ${err}"
              }
              finally {
                d.cleanup() // Cleanup
              }
            }
          
          }
        }
      }
    }
    catch (err) {
      echo "Failed: ${err}"
      error "Failed: ${err}"
    }
    finally {
      b.cleanup()
    }
  }
}
else {
  stage ('Error')
  error 'No Stage'
}