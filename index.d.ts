declare module "react-native-dev-menu" {
  interface RNDevMenuModule {
    addItem: (title: string, action: () => void) => void;
  }

  let DevMenu: RNDevMenuModule;
  export default DevMenu;
}
