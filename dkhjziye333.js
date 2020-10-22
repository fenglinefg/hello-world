/*ziye 

说明：微信扫码 https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.png 获取授权  

10.8 一共20个，自行删减替换（不一定都能提现，可自行关闭）
10.14 因为大部分打卡失效，现删减整理，剩余5个


功能如下：
1.读秒限速打卡，
2.打卡币统计，次数统计
3.现金统计，自动兑换，自动提现  （默认关闭兑换和提现，自行打开）


一，第一次进一定先授权，第一次进一定先授权，第一次进一定先授权，

二，将hostname复制粘贴进配置文件

三，将重写复制到 rewrite_local 下，开启软件，进对应程序获取ck（会卡住，但是可以获取ck），目前一共5个打卡小程序，

建议新建配置片段，获取ck后禁用，
换号则复制js文件，修改jbid的值就可以了



ck=1

微打卡
微早起打卡
音乐打卡
早起打卡
圈子打卡



时间设置  

！！！删除第一个*后面的空格！！！   自行模拟人性化修改选择 


5位  第一位为分 填 10-59     如

* /12 6-23 * * * dkhjziye925.js           
6点到23点 0 12 24 36 48 运行1次  


6位  第一位为秒 填 0-59      第二位为分 填 10-59   如

23 * /13 6-23 * * * dkhjziye925.js        
6点到23点 0 13 26 39 52 的23秒运行1次



打卡限速默认设置10分钟一次，可根据情况修改，




hostname=zm.shujumagician.com,www.baimaa.com,ph0001.hezyq.com,daka.isfx.cn,wq.inqan.com,

############## 圈x

//微打卡  微早起打卡
https:\/\/zm\.shujumagician\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js

//音乐打卡
https:\/\/www\.baimaa\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


// 早起打卡
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js



//圈子打卡
https:\/\/wq\.inqan\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js





############## loon

//微打卡  微早起打卡
http-request https:\/\/zm\.shujumagician\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true

//音乐打卡
http-request https:\/\/www\.baimaa\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


// 早起打卡
http-request https:\/\/ph0001\.hezyq\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true




//圈子打卡
http-request https:\/\/wq\.inqan\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true







############## surge

//微打卡  微早起打卡
微打卡  微早起打卡 = type=http-request,pattern=https:\/\/zm\.shujumagician\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true

//音乐打卡
音乐打卡 = type=http-request,pattern=https:\/\/www\.baimaa\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


// 早起打卡
早起打卡 = type=http-request,pattern=https:\/\/ph0001\.hezyq\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true



//圈子打卡
圈子打卡 = type=http-request,pattern=https:\/\/wq\.inqan\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true






*/

//////////////////////////////////////////正文

const $ = new Env()//模版引用
const jbid =1// 换号则复制js，修改jbid的值就可以了
const CK=1// 
const jsname = '打卡合集'
const notify = 1; //通知开为1，关为0
const logs = 1; // 日志开为1，关为0
const dk=1//打卡开关
const tj=1//统计开关
const xj=1//现金开关
const dm=1//读秒开关
const tx=0//提现开关
const dh=0//兑换开关
const dd=1//运行时间，单位为秒
var tz=''//通知循环






const wdkname = "微打卡";//程序名
const wdkid = 2;//ck id
const wdkcs = 20;//打卡次数
const wdktx = 10;//提现标准
const wdkxs = 10;//限速标准.单位为分钟
const wdkdh = 13000;//兑换标准
const wdkdhid = 9;//兑换id
const wdkdhsp = "腾讯月卡";//兑换商品
const wdkkey = "wdkkey"+jbid  //保存ck
const wdkurl =$.getdata(wdkkey)//读取ck







const wzqdkname = "微早起打卡";//程序名
const wzqdkid = 8;//ck id
const wzqdkcs = 20;//打卡次数
const wzqdktx = 10;//提现标准
const wzqdkxs = 10;//限速标准.单位为分钟
const wzqdkdh = 13000;//兑换标准
const wzqdkdhid = 10;//兑换id
const wzqdkdhsp = "腾讯月卡";//兑换商品
const wzqdkkey = "wzqdkkey"+jbid  //保存ck
const wzqdkurl =$.getdata(wzqdkkey)//读取ck




const yydkname = "音乐打卡";//程序名
const yydkid = 11;//ck id
const yydkcs = 10;//打卡次数
const yydktx = 10;//提现标准
const yydkxs = 10;//限速标准.单位为分钟
const yydkdh = 10;//兑换标准
const yydkdhid = 22;//兑换id
const yydkdhsp = "1元";//兑换商品
const yydkkey = "yydkkey"+jbid  //保存ck
const yydkurl =$.getdata(yydkkey)//读取ck










const zqdkname = "早起打卡";//程序名
const zqdkid = 597;//ck id
const zqdkcs = 20;//打卡次数
const zqdktx = 10;//提现标准
const zqdkxs = 10;//限速标准.单位为分钟
const zqdkdh = 5000;//兑换标准
const zqdkdhid = 6;//兑换id
const zqdkdhsp = "1元";//兑换商品
const zqdkkey = "zqdkkey"+jbid  //保存ck
const zqdkurl =$.getdata(zqdkkey)//读取ck




const qzdkname = "圈子打卡";//程序名
const qzdkid = 9;//ck id
const qzdkcs = 20;//打卡次数
const qzdktx = 10;//提现标准
const qzdkxs = 10;//限速标准.单位为分钟
const qzdkdh = 3500;//兑换标准
const qzdkdhid = 4;//兑换id
const qzdkdhsp = "50元话费";//兑换商品
const qzdkkey = "qzdkkey"+jbid  //保存ck
const qzdkurl =$.getdata(qzdkkey)//读取ck















//CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie()
} else {
   all()
}



//1异步运行


  function all()

 {

   for(var i=0;i<6;i++)
 { (function(i) {
            setTimeout(function() {
     
     if(i==0) wdk(i);

else if(i==1) wzqdk(i);
else if(i==2) yydk(i);

else if(i==3) zqdk(i);

else if(i==4) qzdk(i);





else if(i==5) showmsg(i);


  
  
}, (i + 1) * dd*1000);
                })(i)


}}




//CK获取模块
function GetCookie() {

/////////////////////CK=1

if (CK==1)
{
	
if ($request && $request.url.match(/i=2&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const wdkurl =  $request.url
  $.log(`wdkurl:${wdkurl}`)
  if (wdkurl) $.setdata(wdkurl, wdkkey)
  $.msg(wdkkey, `获取cookie: 成功🎉`, ``)
}






if ($request && $request.url.match(/i=8&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const wzqdkurl =  $request.url
  $.log(`wzqdkurl:${wzqdkurl}`)
  if (wzqdkurl) $.setdata(wzqdkurl, wzqdkkey)
  $.msg(wzqdkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=11&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const yydkurl =  $request.url
  $.log(`yydkurl:${yydkurl}`)
  if (yydkurl) $.setdata(yydkurl, yydkkey)
  $.msg(yydkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=597&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const zqdkurl =  $request.url
  $.log(`zqdkurl:${zqdkurl}`)
  if (zqdkurl) $.setdata(zqdkurl, zqdkkey)
  $.msg(zqdkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=9&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const qzdkurl =  $request.url
  $.log(`qzdkurl:${qzdkurl}`)
  if (qzdkurl) $.setdata(qzdkurl, qzdkkey)
  $.msg(qzdkkey, `获取cookie: 成功🎉`, ``)
}



}






}
















///////////////////////////////////////运行



function wdk() {
var A={Y:[wdkurl,wdkname,wdkcs,wdktx,wdkxs,wdkdh,wdkdhid,wdkdhsp]}
B(A)
}







function wzqdk() {
var A={Y:[wzqdkurl,wzqdkname,wzqdkcs,wzqdktx,wzqdkxs,wzqdkdh,wzqdkdhid,wzqdkdhsp]}
B(A)
}




function yydk() {
var A={Y:[yydkurl,yydkname,yydkcs,yydktx,yydkxs,yydkdh,yydkdhid,yydkdhsp]}
B(A)
}










function zqdk() {
var A={Y:[zqdkurl,zqdkname,zqdkcs,zqdktx,zqdkxs,zqdkdh,zqdkdhid,zqdkdhsp]}
B(A)
}




function qzdk() {
var A={Y:[qzdkurl,qzdkname,qzdkcs,qzdktx,qzdkxs,qzdkdh,qzdkdhid,qzdkdhsp]}
B(A)
}











function B(C) {

return new Promise((resolve, reject) => {


const Tjurl = {url: C.Y[0]};
const Xjurl = {url: C.Y[0].replace(/action=today&contr=index/g, `action=index&contr=my`)};
const Logurl = {url: C.Y[0].replace(/action=today&contr=index/g, `action=log&contr=clock&level=1&p=1&today=1`)};

const Dhurl = {url: C.Y[0].replace(/action=today&contr=index/g, `action=index&contr=shop`)};

const Dhspurl = {url: C.Y[0].replace(/do=distribute/g, `do=exchange&id=${C.Y[6]}`)};




const Txurl = {url: C.Y[0].replace(/action=today&contr=index/g, `action=withdrawals&contr=my&money=${C.Y[3]}&payment_code=`)};

const Dkurl = {url: C.Y[0].replace(/action=today&contr=index/g, `action=sign&contr=clock`)
	 };



//统计打卡

if (tj==1)
$.get(Tjurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}统计 - data: ${data}`)
      tbj = JSON.parse(data)
if(tbj.status == 1 && tbj.info.today.clock <  C.Y[2]){tz+=C.Y[1]+'[账户信息]👤'+
'已打卡'+[Number(tbj.info.today.clock) ]+'/'+C.Y[2]+'次'+',得'+[Number(tbj.info.today.currency)]+'币'+'\n'
 }
else {tz+=C.Y[1]+'[打卡完成]✅'+'得'+[Number(tbj.info.today.currency)]+'币'+'\n'}


if (dk==1&&tbj.info.today.clock==0){
   $.get(Dkurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}打卡- data: ${data}`)
       dbj = JSON.parse(data)
if (dbj.status==1){
tz+=C.Y[1]+'[打卡成功]🎉'+'打卡次数+1'+'\n'

    }


resolve()

    })


}










//读秒打卡


if (dm==1)
   $.get(Logurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}限速- data: ${data}`)
       ybj = JSON.parse(data)

var f=ybj.info.log.length-1
var time = ybj.info.log[f].created
var newtime=time.replace(time[10],'T')
var c = new Date(newtime)/1000
var now = new Date()/1000
var cz=[Number((now+28800-c)/60).toFixed(0)]

if (cz<C.Y[4])
{
tz+=C.Y[1]+'[距离上次]⏰'+cz+'分钟,'+'差'+(C.Y[4]-cz)+'分钟'+'\n';

}



if (dk==1&&cz>C.Y[4]&&tbj.info.today.clock<C.Y[2]){
   $.get(Dkurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}打卡- data: ${data}`)
       dbj = JSON.parse(data)
if (dbj.status==1){
tz+=C.Y[1]+'[打卡成功]🎉'+'打卡次数+1'+'\n'

    }


resolve()

    })


}



resolve()
    })






resolve()
    })



//兑换
if (dh==1)
   $.get(Dhurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}兑换 - data: ${data}`)
        Mbj= JSON.parse(data)
if(Mbj.status ==  1) 
{tz+=C.Y[1]+"[总打卡币]💰"+'余'+
Mbj.info.member.currency+"币"+"\n"
 
 }





if (dh==1&&Mbj.info.member.currency>=C.Y[5]){
   $.get(Dhspurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}兑换商品 - data: ${data}`)
        nbj = JSON.parse(data)
if(nbj.status ==  1)   {

tz+=C.Y[1]+'[兑换成功]🧧，成功兑换'+C.Y[7]
+'\n'
 
 }

else {

tz+=C.Y[1]+'[兑换失败]❓:'+nbj.info+'\n'
 
 }

resolve()

    })


}



resolve()
    })





//现金提现
if (xj==1)
   $.get(Xjurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}现金 - data: ${data}`)
       xbj = JSON.parse(data)
if(xbj.status ==  1) 
{tz+=C.Y[1]+'[现金余额]💵'+xbj.info.member.money+'元'+'\n'
 
 }





if (tx==1&&xbj.info.member.money>=C.Y[3]){
   $.get(Txurl,(error, response, data) =>{
     if(logs)$.log(`${C.Y[1]}提现 - data: ${data}`)
       obj = JSON.parse(data)
if(obj.status ==  1)   {

tz+=C.Y[1]+'[提现成功]🧧，提现'+C.Y[3]+'元'+'\n'
 
 }

else {

tz+=C.Y[1]+'[提现失败]❓:'+obj.info+'\n'
 
 }

resolve()
    })

 
}



    
resolve()
    })



 })
  }  






function showmsg() {
if (logs==1)
console.log(tz)

if (notify ==1)
$.msg(jsname,'',tz)


}

// prettier-ignore
function Env(t,s){return new class{constructor(t,s){this.name=t,this.data=null,this.dataFile="box.dat",this.logs=[],this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,s),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient}isLoon(){return"undefined"!=typeof $loon}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s);if(!e&&!i)return{};{const i=e?t:s;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s),o=JSON.stringify(this.data);e?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(s,o):this.fs.writeFileSync(t,o)}}lodash_get(t,s,e){const i=s.replace(/\[(\d+)\]/g,".$1").split(".");let o=t;for(const t of i)if(o=Object(o)[t],void 0===o)return e;return o}lodash_set(t,s,e){return Object(t)!==t?t:(Array.isArray(s)||(s=s.toString().match(/[^.[\]]+/g)||[]),s.slice(0,-1).reduce((t,e,i)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(s[i+1])>>0==+s[i+1]?[]:{},t)[s[s.length-1]]=e,t)}getdata(t){let s=this.getval(t);if(/^@/.test(t)){const[,e,i]=/^@(.*?)\.(.*?)$/.exec(t),o=e?this.getval(e):"";if(o)try{const t=JSON.parse(o);s=t?this.lodash_get(t,i,""):s}catch(t){s=""}}return s}setdata(t,s){let e=!1;if(/^@/.test(s)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(s),h=this.getval(i),a=i?"null"===h?null:h||"{}":"{}";try{const s=JSON.parse(a);this.lodash_set(s,o,t),e=this.setval(JSON.stringify(s),i),console.log(`${i}: ${JSON.stringify(s)}`)}catch(s){const h={};this.lodash_set(h,o,t),e=this.setval(JSON.stringify(h),i),console.log(`${i}: ${JSON.stringify(h)}`)}}else e=$.setval(t,s);return e}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,s){return this.isSurge()||this.isLoon()?$persistentStore.write(t,s):this.isQuanX()?$prefs.setValueForKey(t,s):this.isNode()?(this.data=this.loaddata(),this.data[s]=t,this.writedata(),!0):this.data&&this.data[s]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,s=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?$httpClient.get(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status,s(t,e,i))}):this.isQuanX()?$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t)):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,s)=>{try{const e=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(e,null),s.cookieJar=this.ckjar}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t)))}post(t,s=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),delete t.headers["Content-Length"],this.isSurge()||this.isLoon())$httpClient.post(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status),s(t,e,i)});else if(this.isQuanX())t.method="POST",$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t));else if(this.isNode()){this.initGotEnv(t);const{url:e,...i}=t;this.got.post(e,i).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t))}}msg(s=t,e="",i="",o){const h=t=>!t||!this.isLoon()&&this.isSurge()?t:"string"==typeof t?this.isLoon()?t:this.isQuanX()?{"open-url":t}:void 0:"object"==typeof t&&(t["open-url"]||t["media-url"])?this.isLoon()?t["open-url"]:this.isQuanX()?t:void 0:void 0;this.isSurge()||this.isLoon()?$notification.post(s,e,i,h(o)):this.isQuanX()&&$notify(s,e,i,h(o)),this.logs.push("","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="),this.logs.push(s),e&&this.logs.push(e),i&&this.logs.push(i)}log(...t){t.length>0?this.logs=[...this.logs,...t]:console.log(this.logs.join(this.logSeparator))}logErr(t,s){const e=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();e?$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.message)}wait(t){return new Promise(s=>setTimeout(s,t))}done(t={}){const s=(new Date).getTime(),e=(s-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,s)}
