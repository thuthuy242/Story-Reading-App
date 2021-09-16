import { apiUrl } from '../../config/vars';
import { stringify } from 'querystring';
import { RequestAPI } from './request-api';
export class StoriesAPI {
	public static async list(params: any = {}): Promise<any> {
        try {

            const operations = stringify(params);
			
            const responses = await RequestAPI.get(`${apiUrl}/stories?${operations}`);
            return responses.data;
            
        } catch (e) {
            throw e;
        }
    }
    public static async getOne(params: any): Promise<any> {
        try {

            const {id} = params;
			
            console.log("abc",id);
            const responses = await RequestAPI.get(`${apiUrl}/stories/${id}`);
            console.log(`${apiUrl}/stories/${id}`);         
            return responses.data;
            
            
        } catch (e) {
            throw e;
        }
    }
}