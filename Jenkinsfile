#!groovy​
@Library('sprockets@2.1.0') _

import common
import git
import hipchat
import node
import frontend

def service = 'cx-ui-components'
def docker_tag = BUILD_TAG.toLowerCase()
def c = new common()
def h = new hipchat()
def n = new node()
def f = new frontend()

node(){
  pwd = pwd()
}

pipeline {
  agent any
  stages {
    stage ('Export Properties') {
      steps {
        script {
          n.export()
          build_version = readFile('version')
          c.setDisplayName("${build_version}")
        }
      }
    }
    stage ('Build') {
      steps {
        sh "mkdir build"
        sh "docker build -t ${docker_tag} -f Dockerfile-build ."
        sh "docker run --rm --mount type=bind,src=${pwd}/build,dst=/home/node/mount ${docker_tag}"
        sh "echo Build Done"
      }
    }
    stage ('Publish') {
      when { anyOf {branch 'master'; branch 'develop'; branch 'release'; branch 'hotfix'}}
      steps {
        sh "docker run --rm --mount type=bind,src=${pwd}/publish,dst=/home/node/mount ${docker_tag}"
        sh "echo Publish Done"
      }
    }
    stage ('Push to Github') {
      when { anyOf {branch 'master'; branch 'develop'; branch 'release'; branch 'hotfix'}}
      steps {
        git url: "git@github.com:SerenovaLLC/${service}"
        sh 'git checkout -b build-${BUILD_TAG}'
        sh 'git add -f build/* '
        sh "git commit -m 'release ${build_version}'"
        script {
          if (build_version.contains("SNAPSHOT")) {
            sh "if git tag --list | grep ${build_version}; then git tag -d ${build_version}; git push origin :refs/tags/${build_version}; fi"
          }
        }
        sh "git tag -a ${build_version} -m 'release ${build_version}, Jenkins tagged ${BUILD_TAG}'"
        sh "git push origin ${build_version}"
      }
    }
    stage ('Push to S3') {
      when { anyOf {branch 'master'; branch 'develop'; branch 'release'; branch 'hotfix'}}
      steps {
        script {
          n.push("${service}", "${build_version}")
        }
      }
    }
    stage ('Deploy') {
      when { anyOf {branch 'master'; branch 'develop'; branch 'release'; branch 'hotfix'}}
      steps {
        script {
          f.pull("${service}", "${build_version}") // pull down version of site from s3
          f.versionFile("${build_version}") // make version file
          f.confFile("dev", "${build_version}") // make conf file
          f.deploy("dev","styleguide") // push to s3
          f.invalidate("E3MJXQEHZTM4FB") // invalidate cloudfront
          h.hipchatDeployServiceSuccess("${service}", "dev", "${build_version}", "${env.BUILD_USER}")
        }
      }
    }
    stage ('Notify Success') {
      steps {
        script {
          h.hipchatPullRequestSuccess("${service}", "${build_version}")
        }
      }
    }
  }
  post {
    failure {
      script {
        h.hipchatPullRequestFailure("${service}", "${build_version}")
      }
    }
    always {
      script {
        c.cleanup()
      }
      sh "docker rmi ${docker_tag}"
    }
  }
}
