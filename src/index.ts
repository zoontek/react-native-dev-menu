import { NativeEventEmitter, NativeModules } from "react-native";

const { RNDevMenu } = NativeModules;

const NativeModule: {
  addItem: (name: string) => Promise<void>;
} = RNDevMenu;

let emitter: NativeEventEmitter | undefined;
let handlers: Map<string, () => void> | undefined;

export const addItem = (name: string, handler: () => void): Promise<void> => {
  if (!__DEV__) {
    return Promise.resolve();
  }

  if (handlers == null) {
    handlers = new Map();
  }

  if (emitter == null) {
    emitter = new NativeEventEmitter(RNDevMenu);

    emitter.addListener("customDevOptionTap", (name: string) => {
      const handler = handlers?.get(name);
      handler != null && handler();
    });
  }

  handlers.set(name, handler);
  return NativeModule.addItem(name);
};

export default { addItem };
