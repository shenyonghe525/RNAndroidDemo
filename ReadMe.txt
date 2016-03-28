说明:
   先熟悉rn的设计思路以及基本用法,尽量用现有的android RN组件来完成页面化的显示工作.

学习:
1.学习react的基本语法
2.react-native中各种view的使用
3.页面跳转
4.写demo熟悉各个组件的使用规则
5.组件的事件处理
6.react页面和原生的互调.
7.自定义原生的方法,组件.

问题:
1 Android没有时间选择器组件(android组件的匮乏)
  解决-DatePickerAndroid 仅限android
  暂无:单选按钮,9宫格
2 组件拖动(手势与动画)
3 设置背景图片 -- 解决
  答案:http://blog.csdn.net/u010046908/article/details/50805177
4 使用nivagator跳转页面时有明显卡顿




React-Native Mac环境开发环境搭建：

1.安装Homebrew (osx的包管理工具): ruby -e "$(curl -fsSL
https://raw.githubusercontent.com/Homebrew/install/master/install)”

2.安装node.js : brew install node

sudo chown -R $(whoami) /usr/local/share/systemtap

brew link node

3. 安装watchman :
brew install watchman

4.安装flow : brew install flow

5.设置npm淘宝镜像: (也可参考http://npm.taobao.org/)
5.1 创建 .npmrc 文件(在用户主目录下)
5.2 加入以下配置信息:registry = http://registry.npm.taobao.org

6.安装React-Native :
sudo npm install -g react-native-cli


1 创建React-Native项目HelloWorld:

$  react-native init HelloWorld

2 运行Android应用

$ cd AwesomeProject
$ react-native run-android

3 版本查看

$ react-native --version

4 真机测试

$ adb reverse tcp:8081 tcp:8081（5.0以上）



离线调试

1 离线文件下载地址:http://localhost:8081/index.android.bundle?platform=android
2 将代码拷贝到Android的assets目录的index.android.bundle.js文件下


签名发布:
1 生成keystore文件:
  $ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
2 将签名文件拷贝到Android的app根目录下
3 配置项目根目录下的/gradle.properties文件
  MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=*****
  MYAPP_RELEASE_KEY_PASSWORD=*****
4 配置android/app/build.gradle
  android {
      ...
      defaultConfig { ... }
      signingConfigs {
          release {
              storeFile file(MYAPP_RELEASE_STORE_FILE)
              storePassword MYAPP_RELEASE_STORE_PASSWORD
              keyAlias MYAPP_RELEASE_KEY_ALIAS
              keyPassword MYAPP_RELEASE_KEY_PASSWORD
          }
      }
      buildTypes {
          release {
              ...
              signingConfig signingConfigs.release
          }
      }
  }
5 生成签名的APK
  1 cd 项目目录/android
  2 ./gradlew assembleRelease
  3 生成APK android/app/build/outputs/apk/app-release.apk


