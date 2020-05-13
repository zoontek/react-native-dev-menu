// @flow

'use strict';

// $FlowFixMe
const ReactNative = require('react-native');
const NativeEventEmitter = ReactNative.NativeEventEmitter;
const RNDevMenu = ReactNative.NativeModules.RNDevMenu;

const emitter: NativeEventEmitter = new NativeEventEmitter(RNDevMenu);
const handlers: Map<string, () => any> = new Map();

emitter.addListener('customDevOptionTap', (name: string) => {
  const handler = handlers.get(name);
  handler && handler();
});

type RNDevMenuModule = {
  addItem: (name: string, handler: () => any) => Promise<void>,
};

const DevMenu: RNDevMenuModule = {
  addItem(name, handler) {
    if (!__DEV__) {
      return Promise.resolve();
    }

    handlers.set(name, handler);
    return RNDevMenu.addItem(name);
  },
};

module.exports = DevMenu;
