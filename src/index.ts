import { NativeEventEmitter, NativeModules } from "react-native";

const { RNDevMenu } = NativeModules;

const NativeModule: {
  addItem: (name: string) => Promise<void>;
} = RNDevMenu;

const bag: {
  emitter?: NativeEventEmitter;
  handlers?: Map<string, () => void>;
} = {};

export const addItem = (name: string, handler: () => void): Promise<void> => {
  if (!__DEV__) {
    return Promise.resolve();
  }

  if (bag.handlers == null) {
    bag.handlers = new Map();
  }

  if (bag.emitter == null) {
    bag.emitter = new NativeEventEmitter(RNDevMenu);

    bag.emitter.addListener("customDevOptionTap", (name: string) => {
      const handler = bag.handlers?.get(name);
      handler != null && handler();
    });
  }

  bag.handlers.set(name, handler);
  return NativeModule.addItem(name);
};

export default { addItem };
