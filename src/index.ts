import { NativeEventEmitter } from "react-native";
import NativeModule from "./NativeRNDevMenu";

let handlers: Map<string, () => void> | undefined;

export const addItem = (name: string, handler: () => void): Promise<void> => {
  if (!__DEV__) {
    return Promise.resolve();
  }

  if (handlers == null) {
    handlers = new Map();

    new NativeEventEmitter(NativeModule).addListener(
      "customDevOptionTap",
      (name: string) => handlers?.get(name)?.(),
    );
  }

  handlers.set(name, handler);
  return NativeModule.addItem(name);
};

export default { addItem };
