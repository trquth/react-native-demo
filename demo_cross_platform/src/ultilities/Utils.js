import { Platform } from 'react-native';

export default class Utils {
    static isIOS() {
        return Platform.OS === 'ios' || Platform.OS === 'IOS'
    }
}