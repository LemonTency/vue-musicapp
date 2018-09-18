import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getSingerList(){
	const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";
	const data = Object.assign({},commonParams,{
		notice: 0,
		platform: 'yqq',
		callback: 'getUCGI7354730105041949',
		jsonpCallback: 'getUCGI7354730105041949',	
		hostUin: 0,
		loginUin: 0,
		needNewCode: 0,
		data: {"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}},
		g_tk: 5381,


	})
	return jsonp(url,data,options)
}