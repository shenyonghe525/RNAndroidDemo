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

