declare module "react-native-dev-menu" {
    class DevMenu {
        static addItem(title: string, action: () => void): void;
    }

    export default DevMenu;
}
