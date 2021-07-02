import {request} from './request.js';
export function getlunbo(){
	return request({
		url : '/app/findShop',
		method: 'GET',
	})
}