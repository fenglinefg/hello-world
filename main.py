# -*- coding: utf-8 -*-
# @Time    : 2021/2/15 06:30
# @Author  : srcrs
# @Email   : srcrs@foxmail.com

import requests,json,time,re,login,logging,traceback,os

#用户登录
client = login.login()

#获取沃之树首页，得到领流量的目标值
def get_woTree_glowList():
    index = client.post('https://m.client.10010.com/mactivity/arbordayJson/index.htm')
    index.encoding='utf-8'
    res = index.json()
    return res['data']['flowChangeList']

#沃之树任务
#位置: 首页 --> 游戏 --> 沃之树
def woTree_task():
    #领取4M流量*3
    try:
        flowList = get_woTree_glowList()
        num = 1
        for flow in flowList:
            takeFlow = client.get('https://m.client.10010.com/mactivity/flowData/takeFlow.htm?flowId=' + flow['id'])
            takeFlow.encoding='utf-8'
            res1 = takeFlow.json()
            if res1['code'] == '0000':
                logging.info('【沃之树-领流量】: 4M x' + str(num))
            else:
                logging.info('【沃之树-领流量】: 已领取过 x' + str(num))
            #等待1秒钟
            time.sleep(1)
            num = num + 1
        data = '{}'
        #浇水
        grow = client.post('https://m.client.10010.com/mactivity/arbordayJson/arbor/3/0/3/grow.htm',data=data)
        grow.encoding='utf-8'
        res2 = grow.json()
        logging.info('【沃之树-浇水】: 获得' + str(res2['data']['addedValue']) + '培养值')
    except Exception as e:
        print(traceback.format_exc())
        logging.error('【沃之树】: 错误，原因为: ' + str(e))

#有一些问题，暂时可能会出现加倍失败的情况
#每日签到，1积分 +4 积分(翻倍)，第七天得到 1G 日包
#位置: 我的 --> 我的金币
def daySign_task():
    data = {
        'yw_code': '',
        'desmobile': os.environ.get('USERNAME_COVER'),
        'version': 'android@8.0100'
    }
    try:
        client.post('https://act.10010.com/SigninApp/signin/querySigninActivity.htm',data=data)
        daySign = client.post('https://act.10010.com/SigninApp/signin/daySign')
        daySign.encoding='utf-8'
        #本来是不想加这个的，但是会出现加倍失败的状况，暂时加上也是有可能出问题
        client.post('https://act.10010.com/SigninApp/signin/todaySign')
        client.post('https://act.10010.com/SigninApp/signin/addIntegralDA')
        client.post('https://act.10010.com/SigninApp/signin/getContinuous')
        client.post('https://act.10010.com/SigninApp/signin/getIntegral')
        client.post('https://act.10010.com/SigninApp/signin/getGoldTotal')
        doubleAd = client.post('https://act.10010.com/SigninApp/signin/bannerAdPlayingLogo')
        doubleAd.encoding='utf-8'
        #暂时添加上这一项留作观察
        print('留作观察，做测试----->' + doubleAd.text)
        res = doubleAd.json()
        if res['status'] == '0000':
            logging.info('【每日签到】: ' + '打卡成功,' + res['data']['statusDesc'])
        elif res['status'] == '0010':
            logging.info('【每日签到】: ' + '今天已加倍')
    except Exception as e:
        print(traceback.format_exc())
        logging.error('【每日签到】: 错误，原因为: ' + str(e))

#获取 encrymobile，用于天天抽奖
def get_encryptmobile():
    page = client.post('https://m.client.10010.com/dailylottery/static/textdl/userLogin')
    page.encoding='utf-8'
    match = re.search('encryptmobile=\w+',page.text,flags=0)
    usernumber = match.group(0)[14:]
    return usernumber

#天天抽奖
#我的 --> 我的金币 --> 天天抽好礼
def luckDraw_task():
    try:
        numjsp = get_encryptmobile()
        for i in range(3):
            luck = client.post('https://m.client.10010.com/dailylottery/static/doubleball/choujiang?usernumberofjsp=' + numjsp)
            luck.encoding='utf-8'
            res = luck.json()
            logging.info('【天天抽奖】: ' + res['RspMsg'] + ' x' + str(i+1))
    except Exception as e:
        print(traceback.format_exc())
        logging.error('【每日签到】: 错误，原因为: ' + str(e))

#游戏任务中心每日打卡领积分
#位置: 首页 --> 游戏 --> 每日打卡
def gameCenterSign_Task():
    data = {
        'methodType': 'signin',
        'clientVersion': '8.0004',
        'deviceType': 'ipad'
    }
    try:
        gameCenter = client.post('https://m.client.10010.com/producGame_signin', data=data)
        gameCenter.encoding='utf-8'
        res = gameCenter.json()
        if res['respCode'] == '0000' and res['respDesc'] == '打卡并奖励成功':
            logging.info('【游戏中心签到】: ' + res['respDesc'] + '，获得' 
            + str(res['currentIntegral']) + '积分，明日可获得' + str(res['tomorrowIntegral']) + '积分')
        elif res['respCode'] == '0000':
            logging.info('【游戏中心签到】: ' + res['respDesc'])
    except Exception as e:
        print(traceback.format_exc())
        logging.error('【游戏中心签到】: 错误，原因为: ' + str(e))

#开宝箱，赢话费任务 100M 流量
#位置: 首页 --> 游戏 --> 每日打卡 --> 宝箱任务
def openBox_task():
    data1 = {
        'thirdUrl': 'https://img.client.10010.com/shouyeyouxi/index.html#/youxibaoxiang'
    }
    data2 = {
        'methodType': 'reward',
        'deviceType': 'Android',
        'clientVersion': '8.0100',
        'isVideo': 'Y'
    }
    data3 = {
        'methodType': 'taskGetReward',
        'taskCenterId': '187',
        'clientVersion': '8.0100',
        'deviceType': 'Android'
    }
    try:
        #在分类中找到宝箱并开启
        box = client.post('https://m.client.10010.com/mobileService/customer/getShareRedisInfo.htm', data=data1)
        box.encoding='utf-8'
        #观看视频领取更多奖励
        watchAd = client.post('https://m.client.10010.com/game_box', data=data2)
        watchAd.encoding='utf-8'
        #完成任务领取100M流量
        drawReward = client.post('https://m.client.10010.com/producGameTaskCenter', data=data3)
        drawReward.encoding='utf-8'
        res = drawReward.json()
        if res['code'] == '0000':
            logging.info('【100M寻宝箱】: ' + '获得100M流量')
        else:
            logging.info('【100M寻宝箱】: ' + '任务失败')
    except Exception as e:
        print(traceback.format_exc())
        logging.error('【100M寻宝箱】: 错误，原因为: ' + str(e))

#领取 4G 流量包任务，看视频、下载软件每日可获得 240M 流量
#位置: 我的 --> 我的金币 --> 4G流量包
def collectFlow_task():
    data1 = {
        'stepflag': '22'
    }
    
    data2 = {
        'stepflag': '23'
    }
    try:
        for i in range(3):
            #看视频
            watchVideo = client.post('https://act.10010.com/SigninApp/mySignin/addFlow',data1)
            watchVideo.encoding='utf-8'
            res1 = watchVideo.json()
            if res1['reason'] == '00':
                logging.info('【4G流量包-看视频】: 获得' + res1['addNum'] + 'M x' + str(i+1))
            elif res1['reason'] == '01':
                logging.info('【4G流量包-看视频】: 已完成' + ' x' + str(i+1))
            #下软件
            downloadProg = client.post('https://act.10010.com/SigninApp/mySignin/addFlow',data2)
            downloadProg.encoding='utf-8'
            res2 = downloadProg.json()
            if res2['reason'] == '00':
                logging.info('【4G流量包-下软件】: 获得' + res2['addNum'] + 'M x' + str(i+1))
            elif res2['reason'] == '01':
                logging.info('【4G流量包-下软件】: 已完成' + ' x' + str(i+1))
    except Exception as e:
        print(traceback.format_exc())
        logging.error('【4G流量包】: 错误，原因为: ' + str(e))

if __name__ == '__main__':
    if client != False:
        daySign_task()
        gameCenterSign_Task()
        woTree_task()
        luckDraw_task()
        openBox_task()
        collectFlow_task()

