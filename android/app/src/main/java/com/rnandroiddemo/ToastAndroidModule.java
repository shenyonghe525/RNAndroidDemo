package com.rnandroiddemo;

/**
 * 作者： shenyonghe689 on 16/3/24.
 */

import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Nullable;

public class ToastAndroidModule extends ReactContextBaseJavaModule
{
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastAndroidModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * 定义模块名称，在js中通过NativeModules.MyToastAndroid调用
     * @return
     */
    @Override
    public String getName() {
        return "MyToastAndroid";
    }

    /**
     * 可以设置一些常量，能够在js层调用，本例中在JS代码中调用如"MyToastAndroid.LONG"
     * @return
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>(2);
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    /**
     * 自定义方法，通过ReactMethod注解可以把一些Java常量类型映射成js类型
     * @param msg
     * @param duration
     */
    @ReactMethod
    public void show(String msg, int duration) {
        Toast.makeText(getReactApplicationContext(), msg, duration).show();
        System.out.println("js=>jave：ToastAndroidModule"+msg);
    }
}
