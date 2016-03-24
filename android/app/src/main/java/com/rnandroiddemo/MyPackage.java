package com.rnandroiddemo;

/**
 * 作者： shenyonghe689 on 16/3/24.
 */

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyPackage implements ReactPackage
{
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>(1);
        // 将我们自定义模块添加一个集合中，这样React组件就会在合适的时机将我们引用的模块加载进去，这样后面才能愉快地玩耍~
        modules.add(new ToastAndroidModule(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        //现在不需要用到，不要传null，否则报错
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        //现在不需要用到，不要传null，否则报错
        return Collections.emptyList();
    }
}
