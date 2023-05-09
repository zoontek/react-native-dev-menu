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
| 5.0.0+  | 0.70.0+              |

## Setup

```bash
$ npm install --save react-native-dev-menu
# --- or ---
$ yarn add react-native-dev-menu
```

_Don't forget to run `pod install` after that !_

## Usage

```ts
import DevMenu from "react-native-dev-menu";

if (__DEV__) {
  DevMenu.addItem("Say Hello", () => alert("Hello!"));
}
```
