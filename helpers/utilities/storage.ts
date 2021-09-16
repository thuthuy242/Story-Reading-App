import * as SecureStore from 'expo-secure-store';
export class Storage {
    // Storage name
    public static SEARCH_KEYWORD = 'search_keyword';
    public static CATEGORIES = 'categories';
    public static CART = 'cart_mine';
    public static USER = 'user';
    public static WISHLIST = 'wishlist';
    public static USER_STATUS = 'user_status';
    public static USER_METRIC = 'user_metric';
    public static USER_LOCATION = 'user_location';
    public static PRODUCT_VIEWED = 'product_viewed';

    /**
     * Add Storage
     * @param {*} key
     * @param {*} value
     */
    public static async add({ key, value }: any) {
        await SecureStore.setItemAsync(key, value);
        return true;
    }

    /**
     * Get Storage
     * @param {*} key
     */
    public static async get(key: string): Promise<any> {
        const storageItem = await SecureStore.getItemAsync(key);
        return storageItem || null;
    }

    /**
     * Remove Storage
     * @param {*} key
     */
    public static async remove(key: string) {
        await SecureStore.deleteItemAsync(key);
        return true;
    }
}
