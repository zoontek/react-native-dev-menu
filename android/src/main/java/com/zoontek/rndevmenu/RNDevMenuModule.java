package com.zoontek.rndevmenu;

import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.devsupport.interfaces.DevOptionHandler;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter;

public class RNDevMenuModule extends ReactContextBaseJavaModule {

  public RNDevMenuModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNDevMenu";
  }

  @ReactMethod
  public void addItem(final String name, Promise promise) {
    try {
      ReactApplication application = (ReactApplication)getReactApplicationContext()
        .getCurrentActivity()
        .getApplication();

      DevSupportManager manager = application
        .getReactNativeHost()
        .getReactInstanceManager()
        .getDevSupportManager();

      manager.addCustomDevOption(name, new DevOptionHandler() {
        @Override
        public void onOptionSelected() {
          getReactApplicationContext().getJSModule(RCTDeviceEventEmitter.class)
                  .emit("customDevOptionTap", name);
        }
      });

      promise.resolve(null);
    } catch (Exception e) {
      promise.reject(e);
    }
  }
}
