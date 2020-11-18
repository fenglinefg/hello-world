
/*ziye

11.3 修复重写问题
11.9 调整礼盒通知问题
11.10 修复loon重写问题


复制到微信里打开领取红包并下载  http://huodong.0w2ne27.cn/h5/Fanlishare20201111/share?spm=page_name.h5.pty-sharepv~module-home~std-76452&invite_userid=373511081

下载后

进入 我的 点击  天天领现金 获取cookie

⚠️会卡住，但是能获取到cookie，然后注释重写就行了！


hostname=huodong.fanli.com,



#返利网红包
############## 圈x
https:\/\/huodong\.fanli\.com\/h5\/Fanlishare20201111\/ajaxInit url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/flwhbziye.js   






#返利网红包
############## loon

http-request ^https:\/\/huodong\.fanli\.com\/h5\/Fanlishare20201111\/ajaxInit script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/flwhbziye.js, timeout=10, tag=返利网获取ck




#返利网红包
############## surge

返利网红包 = type=http-request,pattern=https:\/\/huodong\.fanli\.com\/h5\/Fanlishare20201111\/ajaxInit,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/flwhbziye.js, requires-header=true




*/





const sy = init()

const jsname='返利网红包'

const logs = 0;   //0为关闭日志，1为开启
const notifyInterval=1//0为关闭通知，1为开启
const jbid=1;
const txbz=1//设置余额大于等于多少提现，必须大于0.3





const flwhburlKey = 'flwhburl'+jbid

const flwhbheaderKey = 'flwhbhd'+jbid



const flwhburlVal = sy.getdata(flwhburlKey)

const flwhbheaderVal = sy.getdata(flwhbheaderKey)

const flwhbbodyVal = ''









var tz=''


let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie()
} else {
   all()
}





function GetCookie() {



   if($request &&$request.url.indexOf("/ajaxInit?init_reward=&invite_userid=&wx_openid=")>=0) {

  const flwhburlVal = $request.url
if (flwhburlVal)        sy.setdata(flwhburlVal,flwhburlKey)
    sy.log(`[${jsname}] 获取url请求: 成功,flwhburlVal: ${flwhburlVal}`)
const flwhbheaderVal = JSON.stringify($request.headers)
    if (flwhbheaderVal)        sy.setdata(flwhbheaderVal,flwhbheaderKey)
    sy.log(`[${jsname}] 获取Cookie: 成功,flwhbheaderVal: ${flwhbheaderVal}`)
    sy.msg(flwhbheaderKey, `获取Cookie: 成功🎉`, ``)
  

  }

}












 function all()

 {

   for(var i=0;i<3;i++)
 { (function(i) {
            setTimeout(function() {
    
     if(i==0) flwhbtask(i);
     if(i==1) flwhblh(i);

else if(i==2) showmsg(i);
}, (i + 1) *1000);
                })(i)


}}



//账户信息
function flwhbtask() {
return new Promise((resolve, reject) => {

  const toflwhburl = {

    url: flwhburlVal,

    headers: JSON.parse(flwhbheaderVal),
    body: flwhbbodyVal
  };
   sy.get(toflwhburl,(error, response, data) =>{
     if(logs) sy.log(`${jsname}, 账户信息: ${data}`)
     signinfo =JSON.parse(data)
      if (signinfo.status==1)
 {
tz+='【收益总计】🎉:'+signinfo.data.user_total_money+'元'+'\n'+
'【账户余额】🎉:'+signinfo.data.user_current_money+'\n'+
'【邀请奖励】🎉:'+signinfo.data.invite_money+'元'+'\n'+
'【邀请人数】🎉:'+signinfo.data.invite_users.length+'\n'


}

else
tz+='【出现问题】✖️:'+signinfo.data+'\n'

zhtx(signinfo.data.user_current_money)




    resolve()
    })
   })
  }  




//惊喜礼盒
function flwhblh() {
return new Promise((resolve, reject) => {

  const toflwhblhurl = {

    url: 'https://huodong.fanli.com/h5/Fanlishare20201111/ajaxDoTask76728',

    headers: JSON.parse(flwhbheaderVal),
    body: flwhbbodyVal
  };
   sy.get(toflwhblhurl,(error, response, data) =>{
     if(logs) sy.log(`${jsname}, 惊喜礼盒: ${data}`)
     jxlh =JSON.parse(data)
      if (jxlh.data.remain_num_76728>0)
 {
tz+='【开启礼盒】🎉:'+jxlh.data.amount+'元'+'\n'+
'【剩余礼盒】🎉:'+jxlh.data.remain_num_76728+'个'+'\n'

}

else
tz+='【开启完毕】✖️:'+'礼盒已全部开启'+'\n'




    resolve()
    })
   })
  }  




function zhtx(y)
{
if(y>=txbz)
flwhbtx()

}






//提现
function flwhbtx() {
return new Promise((resolve, reject) => {

  const toflwhbtxurl = {

    url: 'https://huodong.fanli.com/h5/Fanlishare20201111/ajaxExchangeCash',

    headers: JSON.parse(flwhbheaderVal),

  };
   sy.get(toflwhbtxurl,(error, response, data) =>{
     if(logs) sy.log(`${jsname}, 余额提现: ${data}`)
     txtx =JSON.parse(data)
      if (txtx.status==1)
 {
tz+='【余额提现】🎉:提现成功,请到公众号领取'+'\n'

}

else
tz+='【余额提现】✖️:'+txtx.info+'\n'




    resolve()
    })
   })
  }  









function showmsg() {

console.log(tz)

if (notifyInterval==1)
sy.msg(jsname,'',tz)
}


function init() {
  isSurge = () => {
    return undefined !== this.$httpClient
  }
  isQuanX = () => {
    return undefined !== this.$task
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle = '', body = '') => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (msg) => {
    console.log(`${msg}\n`)
  }
  get = (options, callback) => {
    if (isQuanX()) {
      if (typeof options == 'string') options = { url: options }
      options['method'] = 'GET'
      return $task.fetch(options).then(
        (response) => {
          response['status'] = response.statusCode
          callback(null, response, response.body)
        },
        (reason) => callback(reason.error, null, null)
      )
    }
    if (isSurge()) return $httpClient.get(options, callback)
  }
  post = (options, callback) => {
    if (isQuanX()) {
      if (typeof options == 'string') options = { url: options }
      options['method'] = 'POST'
      $task.fetch(options).then(
        (response) => {
          response['status'] = response.statusCode
          callback(null, response, response.body)
        },
        (reason) => callback(reason.error, null, null)
      )
    }
    if (isSurge()) $httpClient.post(options, callback)
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
