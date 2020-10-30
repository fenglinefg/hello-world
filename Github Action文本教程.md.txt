
Github  Action 教程

第一步
自己注册一个github账号 
再去appstore下载bark通知软件，链接https://apps.apple.com/cn/app/bark-%E7%BB%99%E4%BD%A0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%8F%91%E6%8E%A8%E9%80%81/id1403753865


第二步
用电脑或者手机浏览器先登陆github
进入https://github.com/lxk0301/scripts    
点击右上角 fork 会自动弹到自己 fork过来的库




第三步
按步骤依次点击     Settings ----  Secrets   ----  New secrets         

Name处填写 JD_COOKIE       
Value处填写   cookie     
boxjs里复制过来也可以，自己抓的也可以     

形如  pt_key=AAJfYEQWEQWEQWEQWEQWEQWEQWSW-bNuCjVHzEEfRM;pt_pin=EWE5Q11WQ11111;

多账号换行 如
pt_key=AFSFS;pt_pin=EW
pt_key=FSDF;pt_pin=EW
pt_key=RWER;pt_pin=EW

然后点击 绿色按钮保存


再点击 New secrets         

Name处填写 BARK_PUSH  
Value处填写 Bark软件里的KEY，
形如 https://api.day.app/KEY/              

然后点击 绿色按钮保存




第四步
去 Code 里随便找个README.md文件 添加几个空格也行，  提交,
然后点击Action点击绿色按钮,这里默认显示所有已开启的任务，
点击All workflows框,展开，依次选择任务，点击Enable workflow开启任务,此时已经可以定时运行任务了

也可以点击Run workflow 展开，点击绿色Run workflow手动运行任务



注意，配置好后，所有的js都会定时运行，实际运行时间等于yml文件里设置的时间➕8小时，并且运行存在十几分钟延迟，

至于助力码之类的，进js里查看，自行研究

