# 📳 react-native-dev-menu

[![mit licence](https://img.shields.io/dub/l/vibe-d.svg?style=for-the-badge)](https://github.com/zoontek/react-native-dev-menu/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-native-dev-menu?style=for-the-badge)](https://www.npmjs.org/package/react-native-dev-menu)
[![npm downloads](https://img.shields.io/npm/dt/react-native-dev-menu.svg?label=downloads&style=for-the-badge)](https://www.npmjs.org/package/react-native-dev-menu)
<br />
[![platform - android](https://img.shields.io/badge/platform-Android-3ddc84.svg?logo=android&style=for-the-badge)](https://www.android.com)
[![platform - ios](https://img.shields.io/badge/platform-iOS-000.svg?logo=apple&style=for-the-badge)](https://developer.apple.com/ios)

Add custom items to the React Native dev menu.<br />
The native part of this module is a variation of [react-native-async-storage-dev-menu-item](https://github.com/jsoendermann/react-native-async-storage-dev-menu-item/).

![](https://github.com/zoontek/react-native-dev-menu/blob/master/docs/screenshots.png?raw=true)

## Support

| Version | React Native Support |
| ------- | -------------------- |
| 4.0.0+  | 0.61.0+              |

## Funding

<a href="https://github.com/sponsors/zoontek">
  <img align="right" width="150" alt="This library helped you? Consider sponsoring!" src=".github/funding-octocat.svg">
</a>

This module is provided **as is**, I work on it in my free time.

If your company uses it in a production app, consider sponsoring this project 💰. You also can contact me for **premium** enterprise support, help with issues, prioritize bugfixes, feature requests, etc.

## Setup

```bash
$ npm install --save react-native-dev-menu
# --- or ---
$ yarn add react-native-dev-menu
```

_Don't forget to run `pod install` after that !_

## 🆘  Manual linking

Because this package targets React Native 0.61.0+, you will probably don't need to link it manually. Otherwise if it's not the case, follow this additional instructions:

<details>
  <summary><b>👀 See manual linking instructions</b></summary>

### iOS

Add this line to your `ios/Podfile` file, then run `pod install`.

```bash
target 'YourAwesomeProject' do
  # …
  pod 'RNDevMenu', :path => '../node_modules/react-native-dev-menu'
end
```

### Android

1. Add the following lines to `android/settings.gradle`:

```gradle
include ':react-native-dev-menu'
project(':react-native-dev-menu').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-dev-menu/android')
```

2. Add the implementation line to the dependencies in `android/app/build.gradle`:

```gradle
dependencies {
  // ...
  implementation project(':react-native-dev-menu')
}
```

3. Add the import and link the package in `MainApplication.java`:

```java
import com.zoontek.rndevmenu.RNDevMenuPackage; // <- add the RNDevMenuPackage import

public class MainApplication extends Application implements ReactApplication {

  // …

  @Override
  protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // …
    packages.add(new RNDevMenuPackage());
    return packages;
  }

  // …
}
```

</details>

## Usage

```ts
import DevMenu from "react-native-dev-menu";

if (__DEV__) {
  DevMenu.addItem("Say Hello", () => alert("Hello!"));
}
```
