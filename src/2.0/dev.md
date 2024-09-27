---
title: 词库开发
---
# 基础概念
记得词库命令的符号全都是英文，以及注意空格
## 1. 背包
每个使用词库的人都被称为`玩家`，每个玩家都有自己的`背包`。  
  
***
  
## 2. 物品
玩家背包中可以存储`物品`，可以通过一些语句来修改他们的`数量`。  
  
***
  
## 3. 列表
列表是一种特殊的`物品`，它里面可以存放一些`文字`。  
例如`成就`，它里面可以存储着一些文字：`第一滴血`，`第二支箭`  
  
***
  
## 4. 匹配
如.`问a答b`  
我们必须发送`a`才能让机器人发送`b`  
而像`(@)`这样的语句则能够代表一切艾特，如以下情况：  
`.问(@)答b`  
我们`艾特一个人`，发送，即可让机器人回答`b`，此时`(@)`匹配了`花园内的艾特`  
  
***
  
## 5.&lt;&gt;必填项
如：&lt;物品名称&gt;代表的是此处必须要填物品名称  
  
***
  
## 6.[]选填项
如：[物品id]代表的是此处可以选填物品id  
  
***
  
## 7. 回复为空
当回复为空时，则不回复  
  
## 8. 背包
玩家背包的名字是玩家唯一标识中`数字与英文`的部分，如`5b0fe8a3b1ff2`。  
  
  
***
  
  
# 词库语句
## 触发匹配语句
只在触发词句中使用  
  
***
  
### 1. (id)
匹配唯一标识  
运行效果及添加方式：  
![id匹配](./image/id匹配.png)  
  
***
  
### 2. (@)
匹配艾特  
运行效果及添加方式：  
![艾特匹配](./image/艾特匹配.png)  
  
***
  
### 3. (数)
匹配一个数字  
运行效果及添加方式：  
![数字匹配](./image/匹配数字.png)  

***
  
## 回复运行语句
只能在回复词句中使用  
  
***
  
### 触发匹配输出类
可显示触发中匹配的东西  
  
***  
  
#### 1. 匹配数字
指令格式： `$数<匹配第几个>$`  
指令作用： 将会匹配触发中的数字  
  
例如词库是：  
.问`测试(数)测试a(数)`答`回答：$数1$，$数2$`  
  
$数1$：代表触发词中第一个匹配到的(数)  
$数2$：代表触发词中第二个匹配到的(数)  
  
运行示例：  
![数字匹配输出](./image/输出匹配数字.png)  
  
***
  
#### 2. 匹配艾特
指令格式： `$@$`  
指令作用： 将会匹配触发中的艾特  
  
例如词库是：  
.问`测试(@)`答`回答：$@$  `  
  
$@$：代表触发词中匹配到的`(@)`  
  
运行示例：  
![艾特匹配输出](./image/输出匹配艾特.png)  
  
> 回答词中的`$@$`可以写成` [*$@$*] `有惊喜  
  
***  
  
### 基本输出类
#### 1. 输出机器人昵称
指令格式： `$称$`  
指令作用： 将会显示机器人昵称  
  
例如词库是：  
.问`测试`答`回答：$称$ `  
  
运行实例：  
![输出机器人昵称](./image/输出机器人昵称.png)  
  
***
  
#### 2. 发送者昵称
指令格式： `$发$`  
指令作用： 将会触发者的昵称  
  
例如词库是：  
.问`测试`答`回答：$发$ `  
  
运行实例：  
![输出触发人昵称](./image/输出触发人昵称.png)  
  
> 回答词中的`$发$`可以写成` [*$发$*] `有惊喜

***
  
#### 3. 发送者id
指令格式： `$id$`  
指令作用： 将会触发者的唯一标识  
  
例如词库是：  
.问`测试`答`回答：$id$ `  
  
运行实例：  
![输出触发人id](./image/输出触发人id.png)  
  
> 回答词中的`$id$`可以写成` [@$id$@] `有惊喜  
  
***
  
#### 4. 换行
指令格式： `$换$`
指令作用： 它就是一个回车
  
***
  
### 添加/减少背包内物品类
#### 1. 添加物品
指令格式： `+&lt;物品名称&gt; <数量> [目标]+`
指令作用：于背包内添加或增加一种物品的数量  
指令运行结果： 添加物品并返回添加了多少个  
  
>  &lt;数量&gt;：
>   1. 此值为`all`时，则表示添加的数值与背包内该该物品的值相同  
>   2. 此值为`1\~10`则表示，数值为1\~10的随机数
  
##### 运行实例  
.问`测试`答`+小鱼干 10+`  
  
![输出触发人id](./image/添加物品数量固定.png)  


##### 其他语法  
添加随机数量的小鱼干        ： .问`测试`答`+小鱼干 1~10+`  
添加和背包内相同数量的小鱼干：.问`测试`答`+小鱼干 all+`
  
  
***
  
  
#### 2. 减少物品
指令格式： `-&lt;物品名称&gt; <数量> [目标]-`
指令作用：于背包内减少一种物品的数量  
指令运行结果： 减少物品并返回减少了多少个  
备注： 当背包内数量不够减少时，会自动回复哪些物品不够减少  
  
>  &lt;数量&gt;：
>   1. 此值为`all`时，则表示添加的数值与背包内该该物品的值相同  
>   2. 此值为`1\~10`则表示，数值为1\~10的随机数
  
##### 运行实例  
.问`测试`答`-小鱼干 10-`  
  
  
![输出触发人id](./image/减少物品数量固定.png)  


##### 其他语法  
删除随机小鱼干： .问`测试`答`-小鱼干 1~10-`  
删除全部小鱼干： .问`测试`答`-小鱼干 all-`  
  

***
  
  
#### 3. 添加武器/防具
添加武器指令格式： `+武器<武器名称> <攻击力> [目标]+`  
添加防具指令格式： `+防具<防具名称> <防御力> [目标]+`  
指令作用：若添加的武器/防具数值高于背包内的，则添加一把武器/防具  
指令运行结果： 添加武器/防具并返回武器攻击力/防具防御力  
  
>  &lt;数量&gt;：
>   1. 此值为`1\~10`则表示，数值为1\~10的随机数  
  
##### 运行实例  
.问`测试`答`+武器小鱼干之剑 10+`  
.问`测试`答`+防具小鱼干之盾 10+`  
  
##### 其他语法  
添加一把1\~10随机强度的小鱼干之剑： .问`测试`答`+武器小鱼干之剑 1~10+`  
  
  
  
***
  
  
#### 4. 减少武器/防具强度
减少攻击力指令格式： `-武器&lt;物品名称&gt; <攻击力> [目标]-`  
减少防御力指令格式： `-防具&lt;物品名称&gt; <防御力> [目标]-`  
指令作用：于背包内减少一把武器/防具的强度，当为0时则删除该武器/防具  
指令运行结果： 减少数值并返回减少的数量  
  
>  &lt;数量&gt;：
>   1. 此值为`all`时，则表示添加的数值与背包内该该物品的值相同  
>   2. 此值为`1\~10`则表示，数值为1\~10的随机数  
  
##### 运行实例  
.问`测试`答`-武器小鱼干之剑 10-`  
.问`测试`答`-防具小鱼干之盾 10-`  
  
##### 其他语法  
降低一把小鱼干之剑的随机攻击力  ： .问`测试`答`-武器小鱼干之剑 1~10-`  
销毁一把小鱼干之剑              ： .问`测试`答`-武器小鱼干之剑 all-`  
  
  
***
  
  
#### 5. 添加列表
指令格式： `+str<列表名称> <列表内容> [目标]+`  
指令作用：于背包内创建一个列表，并放入`<列表内容>`  
指令运行结果： 返回添加的值  

##### 运行实例
.问`测试`答`+str成就 第一根小鱼干+`  
  
![列表添加](./image/列表添加.png)  
  
  
***
  
  
#### 6. 减少列表
指令格式： `-str<列表名称> <列表内容> [目标]-`  
指令作用：于背包内减少一个列表的特定值  
> `列表内容`为all时则删除此列表
指令运行结果： 返回添加的值  
  
##### 运行实例
.问`测试`答`-str成就 第一根小鱼干-`  
  
![列表减少](./image/列表减少.png)  
  
##### 其他语法  
清除某个列表： .问`测试`答`-str成就 all-` 
  
***
  
  
### 条件类
#### 1. 延迟判断
指令格式： `^<延迟时间(秒)> <输出的话>^`  
指令作用：显示一`<输出的话>`，随后开始延迟，在延迟时间内触发会提示任务未完成  
  
##### 运行实例
.问`签到`答`^100 签到成功^`  

![延迟判断](./image/延迟判断.png)  
  
  
***
  
  
#### 2. 概率判断  
指令格式： `%<概率> <输出的话>%`  
指令作用：进行概率判断，成功则输出`<输出的话>`  
  
> &lt;概率&gt;：
> 填写0~100的数值  
> 比如为30%时则判断概率为30%  
  
##### 运行实例
.问`抽卡`答`%10 抽到啦%`  

![概率判断](./image/概率判断.png)  
  
  
***
  
  
#### 3. 数量判断
指令格式： `?<物品> <条件(>/</=/<>)> <数量> <输出的话>?`  
指令作用： 判断背包内的物品是否满足条件，满足条件则输出`<输出的话>`  
  
##### 运行实例
.问`测试`答`?小鱼干 > 10 你的小鱼干比10条多?`  
  
![数量判断](./image/判断.png)  
  
  
***
  
  
#### 4.OP判断
指令格式： `{<内容>}`  
指令作用： 仅词库op才能显示`<内容>`  
  
#### 运行实例
.问`神`答`神看了你一眼{，你获得了+小鱼干 100+}`  
  
<!-- ![管理员](./image/op.png) -->
> 图像丢失
  
  
***
  
  
### 查询结果类
#### 1. 优先查询
指令格式：  `&lt;物品名称&gt; [目标]`  
指令作用： 返回物品的数量  
指令备注： 该指令执行顺序优先于其他指令  
  
> &lt;物品名称&gt;  
> 当该值为：  
> `武器值`：查询武器的攻击力  
> `武器名`：显示武器名字  
> `防具名`：查询防具的防御力  
> `防具值`：显示武器名字  
> &#x60;str&lt;列表名&gt;&#x60; 查看某个列表所有的项  
> &#x60;str&lt;列表名&gt;:&lt;数字&gt;&#x60; 查看某个列表的某一项  
> &#x60;str&lt;列表名&gt;:&lt;数字&gt;~&lt;数字&gt;&#x60; 查看某个列表的随机一项  
> &#x60;str&lt;列表名&gt;:&lt;数字&gt;~all&#x60; 查看某个列表的随机一项  
  
##### 运行实例
.问测试答`小鱼干`  
  
![优先查询](./image/优先查询.png)  
  
***
  
  
#### 2. 滞后查询
指令格式： `#&lt;物品名称&gt;#`  
指令作用： 返回物品的数量  
指令备注： 该指令执行顺序滞后于其他指令  
  
> &lt;物品名称&gt;  
> 当该值为：  
> `武器值`：查询武器的攻击力  
> `武器名`：显示武器名字  
> `防具名`：查询防具的防御力  
> `防具值`：显示武器名字  
> &#x60;str&lt;列表名&gt;&#x60; 查看某个列表所有的项  
> &#x60;str&lt;列表名&gt;:&lt;数字&gt;&#x60; 查看某个列表的某一项  
> &#x60;str&lt;列表名&gt;:&lt;数字&gt;~&lt;数字&gt;&#x60; 查看某个列表的随机一项  
> &#x60;str&lt;列表名&gt;:&lt;数字&gt;~all&#x60; 查看某个列表的随机一项  
  
##### 运行实例
.问`测试`答`#小鱼干#`  
  
![优先查询](./image/滞后查询.png)  
  
  
***
  
  
### `[目标]`说明
作用： 指定为谁`添加/消除`什么的；当为空不填时则为触发者。  
  
> 此值一一般为：  
  
> that  ：此时，目标则匹配触发词中的`唯一标识`  
>   
> 如： +小鱼干 10 that+  
  
> 文字  ：此时它会创建一个新的背包，并将物品放入  
>   
> 如： +HP 100 BOSS+  
> 此时BOSS背包内会获得100点HP  
  
> 玩家id：此时，将会添加到某个玩家背包  
>   
> 如： +小鱼干 10 5b0fe8a3b1ff2+  