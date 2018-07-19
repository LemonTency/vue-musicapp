import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/p.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
/* 利用jsonp抓取到我们想要的数据 */