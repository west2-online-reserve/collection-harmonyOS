# 鸿蒙第二轮考核

## 参考资料

- [应用程序框架基础](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717497122909477)
- [从简单的页面开始](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717497398588123)
- [开发文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-dev-guide-V5)
- 教程内容各有千秋，每个人的学习习惯也不同，我们提供的教程也只是九牛一毛，希望大家可以多多尝试，找到适合自己的方法。
- 注意善用百度、Google 和 B 站大学即可，有不会、找不到的，也可以随时在群里或者直接私聊问。只要能学到东西，就算是坐悟也是可以的！

## 知识点

常用控件和常见布局的使用
Ability 之间的跳转和通信

## 考核内容

简单仿一个 B 站动态界面

1. 两个 Ability

   - MainAbility、DetailAbility
   - 将 MainAbility 设为启动页

2. 在 MainAbility 中：

   - 上方一个横向滑动的 Grid 用来显示你关注的 up 主头像和名字
   - 下方一个 Swiper，其 item 包括一个 Text 显示动态简介，一个 Image 用来显 示动态信息，Image 要求能最大程度显示图片所有内容并且不变形（设置 objectFit）
   - 单击 up 主头像或名字时，下方的内容显示更改为该 up 的动态信息（Swiper 的 item 变为对应 up 的 item）
   - Swiper 可左右滑动切换不同 up 的动态信息

   ```
   动态信息加载本地图片文件即可，不需要实现网络请求，页面参考B站
   ```

3. 长按 up 主头像或名字跳转 DetailAbility（用 Want 传递信息），在 DetailAbility 中：

   - 显示该 up 主的个人信息（名字、头像、粉丝数等）
   - 一个取关按钮，点击后 Toast 提示取关成功 向上个 Ability 返回数据
   - 关闭 DetailAbility 页面，返回到 MainAbility 页面后，删除被取关的 up 并刷新界面


## 四、注意事项与其他

1. 考核 **使用 ArkTS** 完成
2. **整个项目上传** 至 github
3. 请注意 **规范头像，动态图片等等文件的位置** 参考[资源使用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/resource-usage-V5)
4. up 数量至少 4 个
5. 考核对于 **项目结构** 比较严格，包括后续的考核项目都要有合理的架构划分。提交的时候一定要整个项目提交到 github 上，如果 **无法运行可能会影响考核通过**
6. 代码 **尽量简洁** 不要太复杂！！！
7. MainAbility 页面提供如下**参考** ，**不用一模一样** ，有不清楚的敲我们~

![img](https://github.com/west2-online/learn-HarmonyOS/blob/0d60fb68ea3f42e9ccc5136862f1dfd33aaffb6a/img/round-2.jpg)
```
````
