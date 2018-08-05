import originJSONP from 'jsonp'

export default function jsonp(url,data,option){
/* 希望url是一个纯净的链接，通过对data里面的数据进行处理，再跟url拼接请求到我们要的内容 */
  url += (url.indexOf('?')<0 ? '?' : '&')+param(data)
  /* 第一个需要是？ */
  return new Promise((resolve,reject) => {
    originJSONP(url,option,(err,data) => {
      if(!err){
        resolve(data)
        }else{
        reject(err)
        }
    })
  })
}
/* param是将url拼接好的函数 */
export function param(data){
  let url = '';
  for(var k in data){
    let value = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`
  } 
  /* const finalUrl = ${baseUrl}?a=${a}&b=${b}&c=${c} */
  /* k1=xxxx&k2=xxxxx... */
  /* encodeURIComponent() 函数可把字符串作为 URI 组件进行编码. */
  return url ? url.substring(1) : ''
  /* 如果返回的不是空的我们要把第一个&删掉，因为拼接url的最前面一位是? */
}