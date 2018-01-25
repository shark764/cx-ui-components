#!groovy​
@Library('sprockets@2.1.0') _

import common
import git
import hipchat
import node

def service = 'cx-ui-components'
def c = new common()
def g = new git()
def h = new hipchat()
def n = new node()

node() {
pwd = pwd()
echo pwd
 }

if (pwd ==~ /.*PR.*/ ) {
  node() {
    try {
      timeout(time: 1, unit: 'HOURS') {
        ansiColor('xterm') {
          stage ('SCM Checkout') {
            g.checkOut()
          }
          stage ('Export Properties') {
            n.export()
            pr_version = readFile('version')
            c.setDisplayName("${pr_version}")
          }
          stage ('build') {
            sh 'npm install'
            sh 'npm run build:styleguide'
          }
          stage ('Notify Success') {
            h.hipchatPullRequestSuccess("${service}", "${pr_version}")
          }
        }
      }
    }
    catch (err) {
      h.hipchatPullRequestFailure("${service}", "${pr_version}")
      echo "Failed: ${err}"
      error "Failed: ${err}"
    }
    finally {
      c.cleanup()
    }
  }
}
else if (pwd ==~ /.*master.*/ ) {
  node() {
    try {
      timeout(time: 1, unit: 'HOURS') {
        ansiColor('xterm') {
          stage ('SCM Checkout') {
            g.checkOutFrom("${service}")
          }
          stage ('Export Properties') {
            n.export()
            build_version = readFile('version')
            c.setDisplayName("${build_version}")
          }
          stage ('Build') {
            sh 'npm install'
            sh 'npm run build:styleguide'
            // sh 'node node_modules/gulp/bin/gulp.js prod'
          }
        //   stage ('Push to Github') {
        //     sh 'git checkout -b build-${BUILD_TAG}'
        //     sh 'git add -f build/* '
        //     sh "git commit -m 'release ${build_version}'"
        //     if (build_version.contains("SNAPSHOT")) {
        //       sh "if git tag --list | grep ${build_version}; then git tag -d ${build_version}; git push origin :refs/tags/${build_version}; fi"
        //     }
        //     sh "git tag -a ${build_version} -m 'release ${build_version}, Jenkins tagged ${BUILD_TAG}'"
        //     sh "git push origin ${build_version}"
        //   }
          stage ('Push to S3') {
            n.push("${service}", "${build_version}");
            try {
            d.pull("${service}", "${build_version}") // pull down version of site from s3
            d.versionFile("${build_version}") // make version file
            d.confFile("dev", "${build_version}") // make conf file
            d.deploy("dev","desktop") // push to s3
            d.invalidate("E3MJXQEHZTM4FB") // invalidate cloudfront
            d.hipchatSuccess("${service}", "dev", "${build_version}", "${env.BUILD_USER}")
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
          



        



          stage ('Notify Success') {
            h.hipchatBuildSuccess("${service}", "${build_version}")
          }
        }
      }
    }
    catch (err) {
      h.hipchatBuildFailure("${service}", "${build_version}")
      echo "Failed: ${err}"
      error "Failed: ${err}"
    }
    finally {
      c.cleanup()
    }
  }
}
else {
  stage ('Error')
  error 'No Stage'
}