package com.zoontek.rndevmenu;

import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.devsupport.interfaces.DevOptionHandler;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Nullable;

public class RNDevMenuModule extends ReactContextBaseJavaModule {

  @Nullable
  private List<String> mNames;

  public RNDevMenuModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNDevMenu";
  }

  @ReactMethod
  public void addListener(String eventName) {
    // Set up any upstream listeners or background tasks as necessary
  }

  @ReactMethod
  public void removeListeners(Integer count) {
    // Remove upstream listeners, stop unnecessary background tasks
  }

  @ReactMethod
  public void addItem(final String name, Promise promise) {
    if (mNames == null) {
      mNames = new ArrayList<>();
    }
    if (mNames.contains(name)) {
      promise.resolve(null);
    }

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
          getReactApplicationContext()
            .getJSModule(RCTDeviceEventEmitter.class)
            .emit("customDevOptionTap", name);
        }
      });

      mNames.add(name);
      promise.resolve(null);
    } catch (Exception error) {
      promise.reject(error);
    }
  }
}
