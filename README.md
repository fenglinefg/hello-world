<div align="center">
<h1 align="center">UnicomTask</h1>
<img src="https://img.shields.io/github/issues/srcrs/UnicomTask?color=green">
<img src="https://img.shields.io/github/stars/srcrs/UnicomTask?color=yellow">
<img src="https://img.shields.io/github/forks/srcrs/UnicomTask?color=orange">
<img src="https://img.shields.io/github/license/srcrs/UnicomTask?color=ff69b4">
<img src="https://img.shields.io/github/search/srcrs/UnicomTask/main?color=blue">
<img src="https://img.shields.io/github/v/release/srcrs/UnicomTask?color=blueviolet">
<img src="https://img.shields.io/github/languages/code-size/srcrs/UnicomTask?color=critical">
</div>

# 简介

👯✨😄📫

不再使用任何Actions方式执行，后续会主要使用在云函数和Docker。

联通手机营业厅自动完成每日任务，领流量、签到获取积分等，月底流量不发愁。

开源不易，如果本项目对你有帮助，那么就请给个star吧。😄

# 目录

- [简介](#简介)
- [目录](#目录)
- [功能](#功能)
- [通知推送方式](#通知推送方式)
- [同步上游代码](#同步上游代码)
- [申明](#申明)
- [参考项目](#参考项目)

# 功能

* [x] 沃之树领流量、浇水(12M日流量)
* [x] 每日签到(1积分)
* [x] 天天抽奖，每天三次免费机会(随机奖励)
* [x] 游戏中心每日打卡(连续打卡，积分递增至最高7，第七天1G流量日包)
* [x] 游戏中心宝箱100M任务(任务过期)
* [x] 4G流量包看视频任务(失效)
* [x] 每日领取100定向积分 
* [x] 积分抽奖，每天最多抽30次(中奖几率渺茫)
* [x] 冬奥积分活动(第1和7天，可领取600定向积分，其余领取300定向积分,有效期至下月底)
* [x] 获取每日1G流量日包(截止日期暂时不知道)
* [x] 邮件、钉钉、Tg、企业微信等推送运行结果
* [x] 自动激活即将过期流量包（到期时间1天内）
* [X] 每月领取1G流量包（过期）
* [X] 王卡每月自动激活福利二选一(需在配置项中配置需要激活哪个，每月3号) 

# 通知推送方式

## 1.邮箱

本方式较简单，只需要填写邮箱即可，由于使用的是公共`API`接口，稳定性不高

## 2.钉钉机器人

钉钉群组自定义机器人，配置稍微复杂一些，但是稳定性高，使用方式参考如下：

[钉钉自定义机器人使用方式](https://developers.dingtalk.com/document/app/custom-robot-access)，注意安全设置部分，选择自定义关键词，填写`UnicomTask`。

## 3.TgBot机器人

类似于钉钉机器人，只需要一个`token`和`userId`，自行搜索这两个参数的获取方式。

## 4.pushplus机器人

类似于钉钉机器人，只需要一个`token`，参考[获取pushplus的token](http://www.pushplus.plus/login?redirectUrl=/message)。注意，升级到了新接口，要重新申请`token`。详情见：[更新推送加推送接口](https://github.com/srcrs/UnicomTask/issues/134)

## 5.企业微信应用通知

企业微信自建应用，可发送消息，并且可以不借助第三方，将消息转发到普通微信。用电脑，进行[企业微信登录](https://work.weixin.qq.com/wework_admin/loginpage_wx)，普通微信扫码也可登录，，按照[此教程](https://note.youdao.com/ynoteshare1/index.html?id=351e08a72378206f9dd64d2281e9b83b&type=note#/)获取需要的三个值。

## 6.IFTTT通知

通过触发IFTTT的Webhook Trigger来通知到其它任意服务，具体可以参照[IFTTT文档](https://ifttt.com/maker_webhooks)。

## 7.Bark通知

类似于钉钉机器人，只需要一个`Key`，IOS安装Bark即可获取Key[使用文档](https://github.com/Finb/Bark/blob/master/README.md)。

# 同步上游代码

手动或安装[pull](https://github.com/apps/pull)应用。

# 申明

本项目仅用于学习。

# 参考项目

[mixool/HiCnUnicom](https://github.com/mixool/HiCnUnicom)，感谢该项目对于登录部分的思路

[happy888888/BiliExp](https://github.com/happy888888/BiliExp)，参考了该项目的云函数实现
