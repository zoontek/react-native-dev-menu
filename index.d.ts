export interface RNDevMenuModule {
  addItem: (title: string, action: () => void) => void;
}

declare const DevMenu: RNDevMenuModule;
export default DevMenu;

