
- 文件上传原理
- 最原始的文件上传
- 使用 koa2 作为服务端写一个文件上传接口
- 单文件上传和上传进度
- 多文件上传和上传进度 - demo7
- 拖拽上传
- 剪贴板上传
- 大文件上传之分片上传
- 大文件上传之断点续传


## 查看node临时路径
```
E:\work_items\upload-demo (upload-demo@1.0.0)
$ node
Welcome to Node.js v12.16.3.
Type ".help" for more information.
> os.tmpdir()
'C:\\Users\\RS\\AppData\\Local\\Temp'
> .exit

```

运行方式：
```
npm run demo1
```

浏览器输入：
```
http://localhost:8100
```

note: 不要输入具体的页面路径，也不要双击html用浏览器打开。
1. 直接提交页面。
2. 跨域问题。


在开启koa-static后，在输入http://localhost:8100时，会寻找static目录下的index.html文件

## 参考
https://juejin.im/post/5da14778f265da5bb628e590#heading-16
https://cloud.tencent.com/developer/article/1532107
https://github.com/Bigerfe/fe-learn-code/tree/master/src/upfiles-demo

http://www.ruanyifeng.com/blog/2017/08/koa.html
https://juejin.im/post/5dff8a26e51d4558105420ed