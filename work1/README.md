# 鸿蒙第一轮考核

## 参考资料

- [DevEco Studio 的使用](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717494752698457)
- [TypeScript 教程](https://www.runoob.com/typescript/ts-tutorial.html)
- [ArkTS 语法介绍](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717496870909384)
- [面向对象](https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1)

## 知识点

- 配置编译环境
- 输入输出
- 选择结构、循环结构
- 方法
- 数组

- 封装、继承、多态、接口
- 异常处理
- 集合
- 泛型

## 任务

- 进行开发环境配置，下载安装 DevEco Studio，申请并安装模拟器（即使你目前使用华为手机，你的系统也通常不是真正意义上的 HarmonyOS，因此后续的界面开发需要用到模拟器）
- 完成下面两项在线刷题网站的任务，当然写的越多越好，尽可能的熟悉语言语法（ts 是 js 的扩展，ArkTS 是 ts 的扩展，因此在这个任务中可以选择使用 ts(优先) 或 js 完成）
  - 进行[基础编程题目集 (pintia.cn)](https://pintia.cn/problem-sets/14/exam/problems/type/7)练习，并达到至少一百分
  - 完成[27. 移除元素 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-element/)
    > 注意：提交你的分数的截图或者可以其他证明你已经完成的截图
- 宠物店

> 用代码来写一个自己的宠物店，题目有点长耐心看~
> 完成下面的类
>
> **开一家宠物店，宠物店要有动物还要有顾客**

**1. 一个 Animal 动物类 (接口类 interface)**

- 变量:
  - 动物名(String)
  - 年龄(number)
  - 性别
  - 价格(number)
  - ....
- 方法:
  - 一个全参构造方法
  - 一个抽象的 toString() 方法
  - ........

**2. 中华田园犬类 (implements Animal)**<img src="https://gitee.com/sky-dog/note/raw/master/img/202210252201019.jpg" alt="img" style="zoom:3%;" />

- 变量: isVaccineInjected(boolean 是否注射狂犬病疫苗)
- 价格 100 元

**3. 猫猫类 (implements Animal)**<img src="https://gitee.com/sky-dog/note/raw/master/img/202210252202619.png" alt="image-20221025220229577" style="zoom:15%;" />

- 价格 200 元

**4. 你喜欢的其他动物.....**<img src="https://gitee.com/sky-dog/note/raw/master/img/202210252202563.png" alt="image-20221025220257537" style="zoom:50%;" />

- 自由选择 合理就行

**5. 顾客类 Customer**

- 成员变量:
  - 顾客名字(String)
  - 到店次数(number)
  - 最新到店时间
- 方法
  - 重写 toString() 方法, 要求按一定格式输出客户的所有信息

**6. 宠物店接口 AnimalShop (interface)**

你的宠物店需要有一些基础功能:

- 买入新动物(需要的参数自己决定)
- 招待客户(Customer)
- 歇业

**7. MyAnimalShop 自己的宠物店 (implements AnimalShop)**

- 变量:

  - 店的余额
  - 一个存放动物的列表 (Array)
  - 一个顾客列表留作纪念
  - 是否正在营业
  - ....

- 实现接口中的方法

  - 买入动物 -> 买入一只动物，记得在动物列表中添加，

    如余额不足则抛出异常 InsufficientBalanceError

  - 招待客户 -> 接受客户参数，在顾客列表中加入新顾客，

    出售动物，如果店内没有动物，抛出 AnimalNotFoundError。

    通过 toString 输出动物信息，并把钱入账，将动物移除列表

  - 歇业 -> 输出当天光顾的客户的列表信息，计算并输出一天的利润

**8. 自定义异常类**

- 异常类 (AnimalNotFountError) 没找到动物异常，店内没有动物可买时抛出
- 异常类 (InsufficientBalanceError) 余额不足异常时抛出
- 两个异常类均继承自 Error, 异常中需要携带错误信息，方便捕获后处理和查看

**9. 一个 Test 类, 用于测试你写的类功能是否正常**

- 创建一个宠物店实例，给定余额，初始化动物列表，一个空的顾客列表
- 测试买入动物，招待顾客，歇业
- 建议多拿点例子测试，发现 bug 可以马上改，多考虑代码严谨性
- 本任务没有创建和使用图形用户界面（GUI），使用控制台进行输入和输出

## 提示

- 学习资料择需学习即可，不需要全部学习

- 参数名请使用有意义的单词或短语，要求**见名知意**

- 构造函数与 get/set 等自行斟酌
- 部分变量选择尽量符合实际
- 注意命名规范，使用驼峰命名法
- 注意代码格式规范，可使用自带的格式化快捷键 _ctrl+alt+L_ 进行代码格式化
- 除了面向对象，希望大家也能有面向 google/github/必应/博客园/百度 学习的能力
- 如果有实在写不完或者不理解的部分，可以加一些注释写一点思路或者想法 (可以用`//TODO`来标记未完成的部分)

- 大家刚开始写都会有些懵懵的，不知道在写啥，不过这次只要能写出来能跑就行了，不懂的以后会慢慢再接触了解的。
