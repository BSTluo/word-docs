---

outline: [2,4]
---

# koishi-plugin-word-core-event-trigger-basic<br>[词库基础触发器]

## 简介

此插件为词库插件的附属扩展之一，其有以下作用

1. 为词库添加一个计划任务，可以每当计划任务的时间时，在设置计划任务的`频道`内触发某个`触发句`
2. 创建进群/退群的自动欢迎/送别

## 注意事项

此插件在读取历史的未完成的触发句，请不要在触发句的回复句中加入(调)和(wi)语法，可能会导致无法使用

## 定时触发器使用方法

### corn格式

- 说明：

corn格式在线生成器：[https://cron.qqe2.com/](https://cron.ciding.cc/)

```
* * * * * *
```

这六个占位符从左至右分别表示：<br>
    秒（0-59）、分（0-59）、时（0-23）、日（1-31）、月（1-12）、周（0-7）

实际使用的时候需要在所需代表时间的占位符后输入`/x`（x为所需数字）

- 举例：

每过30秒触发：`*/30 * * * * *`

每小时的1分钟20秒触发：`*/20 */1 * * * *`

每天凌晨的1点10分20秒触发：`*/20 */10 */1 * * *`

每月5日下午3点40分50秒触发：`*50 */40 */15 */5 * *`

每年5月20日11点12分13秒触发：`*13 */12 */11 */20 */5 *`

每周星期四0点触发：`* * */0 * * */1`

### 指令

#### word.newTimer <`触发句`> <`corn时间格式`> [`次数`]

- 说明：

创建一个词库定时任务，执行设定的次数后，删除任务

触发句：词库触发句

计划任务格式：`corn格式`  

次数：此项为可选项，当不填时，则为1次，当-1时，则无数次

- 举例：

比如我们想让bot每隔3分钟发一句“哈哈”

```
1. word.newTimer 滴滴答 "* */3 * * * *"
2. word.add 滴滴答 哈哈
```

设置好如上步骤，bot回复后就会自动每隔3分钟发一次`哈哈`

#### word.stoptimer <`触发句`> <`corn时间格式`>

- 说明：

删除一个定时任务

触发句：词库触发句

计划任务格式：`corn格式`

#### word.listtimer

- 说明：

查看词库的所有触发器

## 自动欢迎/送别使用方法

### 快速开始

我们希望让机器人`自动`在`有人进群`的时候发送`"欢迎进群"`！

在`有人退群`的时候让机器人`自动`发送`"不要停下来啊！！"`

只需要向机器人发送：

```
word.add 加入群组公屏 欢迎进群！

word.add 退出群组公屏 不要停下来啊！！
```

只要这么做就好力。

### 一些扩展

当我们希望为一个特定的用户定制欢迎词/送别词的时候，或者是希望进群后私聊用户发送欢迎词/送别词的话，请参考以下的内容

#### 进群篇

|触发词|作用|示例|
|--|--|--|
|加入群组公屏|有用户进群的时候，机器人会在群聊内触发这个触发词|word.add 加入群组公屏 欢迎加入！|
|加入群组私聊|有用户进群的时候，机器人会对这个用户私聊，并且触发这个触发词|word.add 加入群组私聊 欢迎加入！|
|用户id+加入群组公屏|当指定的用户进群时，机器人会在群聊内触发这个触发词|word.add 1946831552加入群组公屏 欢迎加入！|
|用户id+加入群组私聊|当指定的用户进群时，机器人会对这个用户私聊，并且触发这个触发词|word.add 1946831552加入群组私聊 欢迎加入！|

#### 退群篇

|触发词|作用|示例|
|--|--|--|
|退出群组公屏|有用户退群的时候，机器人会在群聊内触发这个触发词|word.add 退出群组公屏 不要停下来啊！！|
|退出群组私聊|有用户退群的时候，机器人会对这个用户私聊，并且触发这个触发词|word.add 退出群组私聊 不要停下来啊！！|
|<用户id>退出群组公屏|当指定的用户退群时，机器人会在群聊内触发这个触发词|word.add 1946831552退出群组公屏 不要停下来啊！！|
|<用户id>推出群组私聊|当指定的用户退群时，机器人会对这个用户私聊，并且触发这个触发词|word.add 1946831552退出群组私聊 不要停下来啊！！|
