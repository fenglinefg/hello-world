/*ziye 

说明：

10.8 一共20个，自行删减替换（不一定都能提现，可自行关闭）

功能如下：
1.读秒限速打卡，
2.打卡币统计，次数统计
3.现金统计，自动兑换，自动提现  （默认关闭兑换和提现，自行打开）


一，第一次进一定先授权，第一次进一定先授权，第一次进一定先授权，

二，将hostname复制粘贴进配置文件

三，将重写复制到 rewrite_local 下，设置ck的值，开启软件，进对应程序获取ck（会卡住，但是可以获取ck），目前一共20个打卡小程序，

建议新建配置片段，获取ck后禁用，
换号则复制js文件，修改jbid的值就可以了



ck=1

微打卡
坚持打卡
微早起打卡
音乐打卡
爱尚打卡
早起打卡
多啦打卡
圈子打卡
懒人打卡
玩游戏打卡
打卡赚赚钱打卡
小打卡赚钱打卡
天天打卡有礼打卡


ck=2

is打卡
墨尚打卡
晨起打卡


ck=3

开乐打卡
卡神打卡


ck=4

开心打卡
一起打卡


时间设置  

！！！删除第一个*后面的空格！！！   自行模拟人性化修改选择 


5位  第一位为分 填 10-59     如

* /12 6-23 * * * dkhjziye925.js           
6点到23点 0 12 24 36 48 运行1次  


6位  第一位为秒 填 0-59      第二位为分 填 10-59   如

23 * /13 6-23 * * * dkhjziye925.js        
6点到23点 0 13 26 39 52 的23秒运行1次



打卡限速默认设置10分钟一次，可根据情况修改，




hostname=zm.shujumagician.com,www.baimaa.com,ph0001.hezyq.com,daka.isfx.cn,wq.inqan.com,www.ahmsdk.cn,ka.luxiysd.cn,m.juxiaoli.cc,wq.kakaz.com.cn,dkdk.vvrtf.cn,we7.ivee.top,pd.xuexgchn.xyz,www.2xtj7.cn,wx.hanxiaocong.cn,a.yubu.xyz,zqdk.fanyc.club,


############## 圈x

//微打卡 坚持打卡 微早起打卡
https:\/\/zm\.shujumagician\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js

//音乐打卡
https:\/\/www\.baimaa\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//爱尚打卡 多啦打卡 早起打卡
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


// is打卡
https:\/\/daka\.isfx\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//圈子打卡
https:\/\/wq\.inqan\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js



//墨尚打卡
https:\/\/www\.ahmsdk\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//开乐打卡
https:\/\/ka\.luxiysd\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//懒人打卡
https:\/\/m\.juxiaoli\.cc\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//开心打卡
https:\/\/wq\.kakaz\.com\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//卡神打卡
https:\/\/dkdk\.vvrtf\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//玩游戏打卡
https:\/\/we7\.ivee\.top\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//打卡赚赚钱打卡
https:\/\/pd\.xuexgchn\.xyz\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//小打卡赚钱打卡
https:\/\/www\.2xtj7\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//天天打卡有礼打卡
https:\/\/wx\.hanxiaocong\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js

//晨起打卡
https:\/\/a\.yubu\.xyz\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js


//一起打卡
https:\/\/zqdk\.fanyc\.club\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js



############## loon

//微打卡 坚持打卡 微早起打卡
http-request https:\/\/zm\.shujumagician\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true

//音乐打卡
http-request https:\/\/www\.baimaa\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//爱尚打卡 多啦打卡 早起打卡
http-request https:\/\/ph0001\.hezyq\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


// is打卡
http-request https:\/\/daka\.isfx\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//圈子打卡
http-request https:\/\/wq\.inqan\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true



//墨尚打卡
http-request https:\/\/www\.ahmsdk\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//开乐打卡
http-request https:\/\/ka\.luxiysd\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//懒人打卡
http-request https:\/\/m\.juxiaoli\.cc\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//开心打卡
http-request https:\/\/wq\.kakaz\.com\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//卡神打卡
http-request https:\/\/dkdk\.vvrtf\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//玩游戏打卡
http-request https:\/\/we7\.ivee\.top\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//打卡赚赚钱打卡
http-request https:\/\/pd\.xuexgchn\.xyz\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//小打卡赚钱打卡
http-request https:\/\/www\.2xtj7\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//天天打卡有礼打卡
http-request https:\/\/wx\.hanxiaocong\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true

//晨起打卡
http-request https:\/\/a\.yubu\.xyz\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//一起打卡
http-request https:\/\/zqdk\.fanyc\.club\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true



############## surge

//微打卡 坚持打卡 微早起打卡
微打卡 坚持打卡 微早起打卡 = type=http-request,pattern=https:\/\/zm\.shujumagician\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true

//音乐打卡
音乐打卡 = type=http-request,pattern=https:\/\/www\.baimaa\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//爱尚打卡 多啦打卡 早起打卡
爱尚打卡 多啦打卡 早起打卡 = type=http-request,pattern=https:\/\/ph0001\.hezyq\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


// is打卡
is打卡 = type=http-request,pattern=https:\/\/daka\.isfx\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//圈子打卡
圈子打卡 = type=http-request,pattern=https:\/\/wq\.inqan\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true



//墨尚打卡
墨尚打卡 = type=http-request,pattern=https:\/\/www\.ahmsdk\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//开乐打卡
开乐打卡 = type=http-request,pattern=https:\/\/ka\.luxiysd\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//懒人打卡
懒人打卡 = type=http-request,pattern=https:\/\/m\.juxiaoli\.cc\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//开心打卡
开心打卡 = type=http-request,pattern=https:\/\/wq\.kakaz\.com\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//卡神打卡
卡神打卡 = type=http-request,pattern=https:\/\/dkdk\.vvrtf\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//玩游戏打卡
玩游戏打卡 = type=http-request,pattern=https:\/\/we7\.ivee\.top\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//打卡赚赚钱打卡
打卡赚赚钱打卡 = type=http-request,pattern=https:\/\/pd\.xuexgchn\.xyz\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//小打卡赚钱打卡
小打卡赚钱打卡 = type=http-request,pattern=https:\/\/www\.2xtj7\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//天天打卡有礼打卡
天天打卡有礼打卡 = type=http-request,pattern=https:\/\/wx\.hanxiaocong\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true

//晨起打卡
晨起打卡 = type=http-request,pattern=https:\/\/a\.yubu\.xyz\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


//一起打卡
一起打卡 = type=http-request,pattern=https:\/\/zqdk\.fanyc\.club\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.js, requires-body=true


*/

//////////////////////////////////////////正文

const $ = new Env()//模版引用
const jbid =1// 换号则复制js，修改jbid的值就可以了
const CK=1// CK开关,1 2 3 4切换获取ck  0关闭
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




const jcdkname = "坚持打卡";//程序名
const jcdkid = 3;//ck id
const jcdkcs = 10;//打卡次数
const jcdktx = 10;//提现标准
const jcdkxs = 10;//限速标准.单位为分钟
const jcdkdh = 1500;//兑换标准
const jcdkdhid = 7;//兑换id
const jcdkdhsp = "爱奇艺月卡";//兑换商品
const jcdkkey = "jcdkkey"+jbid  //保存ck
const jcdkurl =$.getdata(jcdkkey)//读取ck




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




const asdkname = "爱尚打卡";//程序名
const asdkid = 972;//ck id
const asdkcs = 30;//打卡次数
const asdktx = 10;//提现标准
const asdkxs = 10;//限速标准.单位为分钟
const asdkdh = 1000;//兑换标准
const asdkdhid = 143;//兑换id
const asdkdhsp = "1元";//兑换商品
const asdkkey = "asdkkey"+jbid  //保存ck
const asdkurl =$.getdata(asdkkey)//读取ck




const isdkname = "is打卡";//程序名
const isdkid = 2;//ck id
const isdkcs = 10;//打卡次数
const isdktx = 5;//提现标准
const isdkxs = 10;//限速标准.单位为分钟
const isdkdh = 1000;//兑换标准
const isdkdhid = 143;//兑换id
const isdkdhsp = "1元";//兑换商品
const isdkkey = "isdkkey"+jbid  //保存ck
const isdkurl =$.getdata(isdkkey)//读取ck





const dldkname = "哆啦打卡";//程序名
const dldkid = 1384;//ck id
const dldkcs = 15;//打卡次数
const dldktx = 10;//提现标准
const dldkxs = 10;//限速标准.单位为分钟
const dldkdh = 7880;//兑换标准
const dldkdhid = 232;//兑换id
const dldkdhsp = "5元";//兑换商品
const dldkkey = "dldkkey"+jbid  //保存ck
const dldkurl =$.getdata(dldkkey)//读取ck




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




const msdkname = "墨尚打卡";//程序名
const msdkid = 3;//ck id
const msdkcs = 12;//打卡次数
const msdktx = 10;//提现标准
const msdkxs = 10;//限速标准.单位为分钟
const msdkdh = 1000;//兑换标准
const msdkdhid = 143;//兑换id
const msdkdhsp = "1元";//兑换商品
const msdkkey = "msdkkey"+jbid  //保存ck
const msdkurl =$.getdata(msdkkey)//读取ck




const kldkname = "开乐打卡";//程序名
const kldkid = 2;//ck id
const kldkcs = 15;//打卡次数
const kldktx = 10;//提现标准
const kldkxs = 10;//限速标准.单位为分钟
const kldkdh = 20;//兑换标准
const kldkdhid = 2;//兑换id
const kldkdhsp = "0.3元";//兑换商品
const kldkkey = "kldkkey"+jbid  //保存ck
const kldkurl =$.getdata(kldkkey)//读取ck




const lrdkname = "懒人打卡";//程序名
const lrdkid = 25;//ck id
const lrdkcs = 10;//打卡次数
const lrdktx = 10;//提现标准
const lrdkxs = 10;//限速标准.单位为分钟
const lrdkdh = 1800;//兑换标准
const lrdkdhid = 11;//兑换id
const lrdkdhsp = "抽纸";//兑换商品
const lrdkkey = "lrdkkey"+jbid  //保存ck
const lrdkurl =$.getdata(lrdkkey)//读取ck




const kxdkname = "开心打卡";//程序名
const kxdkid = 2;//ck id
const kxdkcs = 10;//打卡次数
const kxdktx = 10;//提现标准
const kxdkxs = 10;//限速标准.单位为分钟
const kxdkdh = 13000;//兑换标准
const kxdkdhid = 8;//兑换id
const kxdkdhsp = "腾讯月卡";//兑换商品
const kxdkkey = "kxdkkey"+jbid  //保存ck
const kxdkurl =$.getdata(kxdkkey)//读取ck




const ksdkname = "卡神打卡";//程序名
const ksdkid = 3;//ck id
const ksdkcs = 10;//打卡次数
const ksdktx = 10;//提现标准
const ksdkxs = 10;//限速标准.单位为分钟
const ksdkdh = 8000;//兑换标准
const ksdkdhid = 10;//兑换id
const ksdkdhsp = "5元";//兑换商品
const ksdkkey = "ksdkkey"+jbid  //保存ck
const ksdkurl =$.getdata(ksdkkey)//读取ck




const wyxdkname = "玩游戏打卡";//程序名
const wyxdkid = 6;//ck id
const wyxdkcs = 5;//打卡次数
const wyxdktx = 10;//提现标准
const wyxdkxs = 10;//限速标准.单位为分钟
const wyxdkdh = 10000;//兑换标准
const wyxdkdhid = 8;//兑换id
const wyxdkdhsp = "100元话费";//兑换商品
const wyxdkkey = "wyxdkkey"+jbid  //保存ck
const wyxdkurl =$.getdata(wyxdkkey)//读取ck




const dkzzqdkname = "打卡赚赚钱打卡";//程序名
const dkzzqdkid = 12;//ck id
const dkzzqdkcs = 10;//打卡次数
const dkzzqdktx = 10;//提现标准
const dkzzqdkxs = 10;//限速标准.单位为分钟
const dkzzqdkdh = 1000;//兑换标准
const dkzzqdkdhid = 143;//兑换id
const dkzzqdkdhsp = "1元";//兑换商品
const dkzzqdkkey = "dkzzqdkkey"+jbid  //保存ck
const dkzzqdkurl =$.getdata(dkzzqdkkey)//读取ck




const xdkzqdkname = "小打卡赚钱打卡";//程序名
const xdkzqdkid = 14;//ck id
const xdkzqdkcs = 20;//打卡次数
const xdkzqdktx = 10;//提现标准
const xdkzqdkxs = 10;//限速标准.单位为分钟
const xdkzqdkdh = 1000;//兑换标准
const xdkzqdkdhid = 143;//兑换id
const xdkzqdkdhsp = "1元";//兑换商品
const xdkzqdkkey = "xdkzqdkkey"+jbid  //保存ck
const xdkzqdkurl =$.getdata(xdkzqdkkey)//读取ck




const ttdkyldkname = "天天打卡有礼打卡";//程序名
const ttdkyldkid = 17;//ck id
const ttdkyldkcs = 7;//打卡次数
const ttdkyldktx = 10;//提现标准
const ttdkyldkxs = 10;//限速标准.单位为分钟
const ttdkyldkdh = 8888;//兑换标准
const ttdkyldkdhid = 11;//兑换id
const ttdkyldkdhsp = "10元";//兑换商品
const ttdkyldkkey = "ttdkyldkkey"+jbid  //保存ck
const ttdkyldkurl =$.getdata(ttdkyldkkey)//读取ck




const cqdkname = "晨起打卡";//程序名
const cqdkid = 17;//ck id
const cqdkcs = 10;//打卡次数
const cqdktx = 10;//提现标准
const cqdkxs = 10;//限速标准.单位为分钟
const cqdkdh = 1000;//兑换标准
const cqdkdhid = 143;//兑换id
const cqdkdhsp = "1元";//兑换商品
const cqdkkey = "cqdkkey"+jbid  //保存ck
const cqdkurl =$.getdata(cqdkkey)//读取ck



const yqdkname = "一起打卡";//程序名
const yqdkid = 3;//ck id
const yqdkcs = 10;//打卡次数
const yqdktx = 10;//提现标准
const yqdkxs = 10;//限速标准.单位为分钟
const yqdkdh = 5000;//兑换标准
const yqdkdhid = 10;//兑换id
const yqdkdhsp = "50元话费";//兑换商品
const yqdkkey = "yqdkkey"+jbid  //保存ck
const yqdkurl =$.getdata(yqdkkey)//读取ck









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

   for(var i=0;i<21;i++)
 { (function(i) {
            setTimeout(function() {
     
     if(i==0) wdk(i);
else if(i==1) jcdk(i);
else if(i==2) wzqdk(i);
else if(i==3) yydk(i);
else if(i==4) asdk(i);
else if(i==5) zqdk(i);
else if(i==6) dldk(i);
else if(i==7) qzdk(i);
else if(i==8) lrdk(i);
else if(i==9) wyxdk(i);
else if(i==10) dkzzqdk(i);
else if(i==11) xdkzqdk(i);
else if(i==12) ttdkyldk(i);

else if(i==13) isdk(i);
else if(i==14) msdk(i);
else if(i==15) cqdk(i);

else if(i==16) kldk(i);
else if(i==17) ksdk(i);

else if(i==18) kxdk(i);
else if(i==19) yqdk(i);

else if(i==20) showmsg(i);


  
  
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




if ($request && $request.url.match(/i=3&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const jcdkurl =  $request.url
  $.log(`jcdkurl:${jcdkurl}`)
  if (jcdkurl) $.setdata(jcdkurl, jcdkkey)
  $.msg(jcdkkey, `获取cookie: 成功🎉`, ``)
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




if ($request && $request.url.match(/i=972&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const asdkurl =  $request.url
  $.log(`asdkurl:${asdkurl}`)
  if (asdkurl) $.setdata(asdkurl, asdkkey)
  $.msg(asdkkey, `获取cookie: 成功🎉`, ``)
}


if ($request && $request.url.match(/i=1384&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const dldkurl =  $request.url
  $.log(`dldkurl:${dldkurl}`)
  if (dldkurl) $.setdata(dldkurl, dldkkey)
  $.msg(dldkkey, `获取cookie: 成功🎉`, ``)
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




if ($request && $request.url.match(/i=25&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const lrdkurl =  $request.url
  $.log(`lrdkurl:${lrdkurl}`)
  if (lrdkurl) $.setdata(lrdkurl, lrdkkey)
  $.msg(lrdkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=6&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const wyxdkurl =  $request.url
  $.log(`wyxdkurl:${wyxdkurl}`)
  if (wyxdkurl) $.setdata(wyxdkurl, wyxdkkey)
  $.msg(wyxdkkey, `获取cookie: 成功🎉`, ``)
}



if ($request && $request.url.match(/i=12&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const dkzzqdkurl =  $request.url
  $.log(`dkzzqdkurl:${dkzzqdkurl}`)
  if (dkzzqdkurl) $.setdata(dkzzqdkurl, dkzzqdkkey)
  $.msg(dkzzqdkkey, `获取cookie: 成功🎉`, ``)
}






if ($request && $request.url.match(/i=14&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const xdkzqdkurl =  $request.url
  $.log(`xdkzqdkurl:${xdkzqdkurl}`)
  if (xdkzqdkurl) $.setdata(xdkzqdkurl, xdkzqdkkey)
  $.msg(xdkzqdkkey, `获取cookie: 成功🎉`, ``)
}






if ($request && $request.url.match(/i=17&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const ttdkyldkurl =  $request.url
  $.log(`ttdkyldkurl:${ttdkyldkurl}`)
  if (ttdkyldkurl) $.setdata(ttdkyldkurl, ttdkyldkkey)
  $.msg(ttdkyldkkey, `获取cookie: 成功🎉`, ``)
}









}


/////////////////////CK=2

if (CK==2)
{


if ($request && $request.url.match(/i=2&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const isdkurl =  $request.url
  $.log(`isdkurl:${isdkurl}`)
  if (isdkurl) $.setdata(isdkurl, isdkkey)
  $.msg(isdkkey, `获取cookie: 成功🎉`, ``)
}



if ($request && $request.url.match(/i=3&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const msdkurl = $request.url
  $.log(`msdkurl:${msdkurl}`)
  if (msdkurl)  $.setdata(msdkurl, msdkkey)
  $.msg(msdkkey, `获取cookie: 成功🎉`, ``)

}




if ($request && $request.url.match(/i=17&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const cqdkurl =  $request.url
  $.log(`cqdkurl:${cqdkurl}`)
  if (cqdkurl) $.setdata(cqdkurl, cqdkkey)
  $.msg(cqdkkey, `获取cookie: 成功🎉`, ``)
}












}
 



/////////////////////CK=3




if (CK==3)
{
if ($request && $request.url.match(/i=2&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const kldkurl =  $request.url
  $.log(`kldkurl:${kldkurl}`)
  if (kldkurl) $.setdata(kldkurl, kldkkey)
  $.msg(kldkkey, `获取cookie: 成功🎉`, ``)
}





if ($request && $request.url.match(/i=3&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const ksdkurl =  $request.url
  $.log(`ksdkurl:${ksdkurl}`)
  if (ksdkurl) $.setdata(ksdkurl, ksdkkey)
  $.msg(ksdkkey, `获取cookie: 成功🎉`, ``)
}











 }



/////////////////////CK=4



if (CK==4)
{
if ($request && $request.url.match(/i=2&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const kxdkurl =  $request.url
  $.log(`kxdkurl:${kxdkurl}`)
  if (kxdkurl) $.setdata(kxdkurl, kxdkkey)
  $.msg(kxdkkey, `获取cookie: 成功🎉`, ``)
}



if ($request && $request.url.match(/i=3&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const yqdkurl =  $request.url
  $.log(`yqdkurl:${yqdkurl}`)
  if (yqdkurl) $.setdata(yqdkurl, yqdkkey)
  $.msg(yqdkkey, `获取cookie: 成功🎉`, ``)
}





 }

/////////////////////CK=5
if (CK==5)
{
if ($request && $request.url.match(/i=2&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const eryiurl =  $request.url
  $.log(`eryiurl:${eryiurl}`)
  if (eryiurl) $.setdata(eryiurl, eryiurlkey)
  $.msg(eryiurlkey, `获取cookie: 成功🎉`, ``)
}
 }








}



















///////////////////////////////////////运行

function dkdk() {

var yyy=1

}

function wdk() {
var A={Y:[wdkurl,wdkname,wdkcs,wdktx,wdkxs,wdkdh,wdkdhid,wdkdhsp]}
B(A)
}


function jcdk() {
var A={Y:[jcdkurl,jcdkname,jcdkcs,jcdktx,jcdkxs,jcdkdh,jcdkdhid,jcdkdhsp]}
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




function asdk() {
var A={Y:[asdkurl,asdkname,asdkcs,asdktx,asdkxs,asdkdh,asdkdhid,asdkdhsp]}
B(A)
}




function isdk() {
var A={Y:[isdkurl,isdkname,isdkcs,isdktx,isdkxs,isdkdh,isdkdhid,isdkdhsp]}
B(A)
}


function dldk() {
var A={Y:[dldkurl,dldkname,dldkcs,dldktx,dldkxs,dldkdh,dldkdhid,dldkdhsp]}
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




function msdk() {
var A={Y:[msdkurl,msdkname,msdkcs,msdktx,msdkxs,msdkdh,msdkdhid,msdkdhsp]}
B(A)
}








function kldk() {
var A={Y:[kldkurl,kldkname,kldkcs,kldktx,kldkxs,kldkdh,kldkdhid,kldkdhsp]}
B(A)
}


function lrdk() {
var A={Y:[lrdkurl,lrdkname,lrdkcs,lrdktx,lrdkxs,lrdkdh,lrdkdhid,lrdkdhsp]}
B(A)
}





function kxdk() {
var A={Y:[kxdkurl,kxdkname,kxdkcs,kxdktx,kxdkxs,kxdkdh,kxdkdhid,kxdkdhsp]}
B(A)
}




function ksdk() {
var A={Y:[ksdkurl,ksdkname,ksdkcs,ksdktx,ksdkxs,ksdkdh,ksdkdhid,ksdkdhsp]}
B(A)
}




function wyxdk() {
var A={Y:[wyxdkurl,wyxdkname,wyxdkcs,wyxdktx,wyxdkxs,wyxdkdh,wyxdkdhid,wyxdkdhsp]}
B(A)
}





function dkzzqdk() {
var A={Y:[dkzzqdkurl,dkzzqdkname,dkzzqdkcs,dkzzqdktx,dkzzqdkxs,dkzzqdkdh,dkzzqdkdhid,dkzzqdkdhsp]}
B(A)
}


function xdkzqdk() {
var A={Y:[xdkzqdkurl,xdkzqdkname,xdkzqdkcs,xdkzqdktx,xdkzqdkxs,xdkzqdkdh,xdkzqdkdhid,xdkzqdkdhsp]}
B(A)
}




function ttdkyldk() {
var A={Y:[ttdkyldkurl,ttdkyldkname,ttdkyldkcs,ttdkyldktx,ttdkyldkxs,ttdkyldkdh,ttdkyldkdhid,ttdkyldkdhsp]}
B(A)
}




function cqdk() {
var A={Y:[cqdkurl,cqdkname,cqdkcs,cqdktx,cqdkxs,cqdkdh,cqdkdhid,cqdkdhsp]}
B(A)
}




function yqdk() {
var A={Y:[yqdkurl,yqdkname,yqdkcs,yqdktx,yqdkxs,yqdkdh,yqdkdhid,yqdkdhsp]}
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
