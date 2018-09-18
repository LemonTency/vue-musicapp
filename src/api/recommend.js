import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
/* 利用jsonp抓取到我们想要的数据 */


export function getDisList(){
  this.axios.get('https://c.y.qq.com/splcloud/fcgi-bin/fcg_musiclist_getmyfav.fcg',
  	{
  		headers:
  	 {
  	 	referer: 'https://c.y.qq.com/',
  	 	host: 'c.y.qq.com'
  	 },
  	 	pramas: 
  	 {
  	 	hostUin: 0,
  	 	platform: 'yqq',
  	 	needNewCode: 0
  	 }  }).then( res => console.log(res.data))
}