/*ziye

如果显示未获取定位，则重启软件多试几次


下载到文件到本地
放到构造请求里方便修改    (远程不能修改)

浏览器打开https://raw.githubusercontent.com/ziye12/JavaScript/master/diqudaima.txt，然后搜索地区，修改下面👇的6位数




[MITM]
hostname=restapi.amap.com
[rewrite_local]
#云闪付改定位
^https:\/\/restapi\.amap\.com\/v3\/geocode\/regeo? url script-response-body ysfdw.js

*/

var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理



obj.regeocode.addressComponent.adcode="540102"



body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
