// @flow

'use strict';

// $FlowFixMe
const ReactNative = require('react-native');
const NativeEventEmitter = ReactNative.NativeEventEmitter;
const RNDevMenu = ReactNative.NativeModules.RNDevMenu;

let emitter: NativeEventEmitter | void;
let handlers: Map<string, () => any> | void;

type RNDevMenuModule = {
  addItem: (name: string, handler: () => any) => Promise<void>
};

let DevMenu: RNDevMenuModule = {
  addItem(name, handler) {
    if (!__DEV__) {
      return Promise.resolve();
    }

    if (!emitter) {
      emitter = new NativeEventEmitter(RNDevMenu);
    }
    if (!handlers) {
      handlers = new Map();
    }

    handlers.set(name, handler);

    emitter.addListener('customDevOptionTap', (name: string) => {
      if (handlers) {
        const handler = handlers.get(name);
        handler && handler();
      }
    });

    return RNDevMenu.addItem(name);
  }
};

module.exports = DevMenu;
