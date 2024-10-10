# 鸿蒙第三轮考核

## 一、知识点

- 关系型数据库
- 网络请求框架

## 二、参考教程

- [通过关系型数据库实现数据持久化](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/data-persistence-by-rdb-store-V5)
- [HTTP数据请求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/http-request-V5)

## 三、考核内容

设计一个简单的日记本程序。

- 本地保存日记到数据库中，自行设计数据库结构，注意合理性；
- 支持从本地选择插入图片，输入链接插入网络图片，并进行展示；

​ `暂时可以不考虑图文混排，即简单地将图片和文字分开展示，当然能做到更好`

- 使用 List 展示日记列表，可以是单列，也可以是其他形式；支持通过文字搜索，筛选到符合的日记；

- 自动获取当地当天城市天气，一同存入数据库：使用和风天气提供的免费 API 来完成任务

  - [和风开发者平台官网 (qweather.com)](https://dev.qweather.com/)

  - [和风天气 WebApi 使用教程](https://www.cnblogs.com/6543x1/p/15684812.html)

  - 使用的 API

    - 城市查询 API，用于查询城市的 城市 ID（id）、纬度（lat）、经度（lon）等城市信息

      [https://geoapi.qweather.com/v2/city/lookup?key=这里填你的 key&location=要查询的城市名字](https://geoapi.qweather.com/v2/city/lookup?key=这里填你的key&location=要查询的城市名字)

    - 三日天气查询 API，用于查询某地今日、明日、后日的天气信息

      [https://devapi.qweather.com/v7/weather/3d?key=这里填你的 key&location=要查询的城市的 id](https://devapi.qweather.com/v7/weather/3d?key=这里填你的key&location=要查询的城市的id)

    - 以上 api 返回信息均为 json 格式，需要将其实例化为对象


## 四、Bonus（加分项）

- 增加对图文混排的支持；
- 支持导出（以图片或其他形式，可随意发挥）；
- 在保证功能的同时，使界面交互简洁大方；
- 非必要的情况下，尽量少地申请权限。

## 五、注意事项

- 必须使用 ArkTS 作为主要开发语言。
- 上传源码至 GitHub。
- 注意规范性，以及项目结构的合理性。
