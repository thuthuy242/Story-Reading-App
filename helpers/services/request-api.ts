import axios from 'axios';
//import { Cookie } from 'src/helpers/utilities';


export class RequestAPI {
    private static DEFAULT_OPTION: any = () => {
        return {
            headers: {
                'cache-control': 'no-cache',
                // 'X-Consumer-Custom-Id': typeof window === 'undefined' ? null : Cookie.get(Cookie.CLIENT_ID),
                // Authorization: typeof window === 'undefined' ? null : `Bear ${Cookie.get(Cookie.ACCESS_TOKEN)}`,
            }
        };
    }

    public static get(url: string, options: any = {}) {
        const defaultOptions = this.DEFAULT_OPTION();
        return axios.get(url, { ...defaultOptions, options });
    }

    /**
     * Request
     */
    public static post(url: string, data: any, options: any = {}) {
        const defaultOptions = this.DEFAULT_OPTION();
        return axios.post(url, data, { ...defaultOptions, options });
    }

    /**
     * Request
     */
    public static put(url: string, data: any, options: any = {}) {
        const defaultOptions = this.DEFAULT_OPTION();
        return axios.put(url, data, { ...defaultOptions, options });
    }

    /**
     * Request
     */
    public static delete(url: string, options: any = {}) {
        const defaultOptions = this.DEFAULT_OPTION();
        return axios.delete(url, { ...defaultOptions, options });
    }
}
