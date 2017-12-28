# 📳 react-native-dev-menu

[![npm version](https://badge.fury.io/js/react-native-dev-menu.svg)](https://badge.fury.io/js/react-native-dev-menu)
[![npm](https://img.shields.io/npm/dt/react-native-dev-menu.svg)](https://www.npmjs.org/package/react-native-dev-menu)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Add custom items to the React Native dev menu.

_It currently supports React Native **0.48+**._

## Setup

```sh
npm install --save react-native-dev-menu
# --- or ---
yarn add react-native-dev-menu
```

```sh
react-native link react-native-dev-menu
```

### iOS specific setup

#### CocoaPods linking

After installing the npm package, add the following line to your Podfile :

```ruby
pod 'RNDevMenu', :path => '../node_modules/react-native-dev-menu'
```

#### Manual linking

1. In the XCode's "Project navigator", right click on your project's Libraries folder ➜ `Add Files to <...>`
2. Go to `node_modules` ➜ `react-native-dev-menu` ➜ select `RNDevMenu.xcodeproj`
3. Add `libRNDevMenu.a` to `Build Phases` -> `Link Binary With Libraries`

### Android specific setup

#### Manual linking

After installing the package, add the following line to the `./android/settings.gradle` file :

```gradle
include ':app', ':react-native-dev-menu'
project(':react-native-dev-menu').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-dev-menu/android')
```

Include it as dependency in the `./android/app/build.gradle` file :

```gradle
dependencies {
    compile project(':react-native-dev-menu')
    // ...
}
```

Finally, you need to link the package to the `./android/app/src/main/java/…/MainApplication.java` file :

```java
import com.zoontek.rndevmenu.RNDevMenuPackage;

// ...

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        // ...
        new RNDevMenuPackage(), // <-- Add it to the packages list
    );
}

// ...
```

_**P.S.**: You will need to recompile your project with `react-native run-android`._

## Usage

```js
if (__DEV__) {
  const DevMenu = require('react-native-dev-menu');
  DevMenu.addItem('Say Hello', () => alert('Hello!'));
}
```
