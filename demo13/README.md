# upload-demo13

## Project setup
安装依赖：
```
npm install
```

启动后台：
```
npm run demo13
```

启动前台：
```
npm run start
```

浏览器访问：
http://localhost:8080/


把network调为fast 3G

## 知识点
package.json的scripts里：

`&` 表示并行执行命令。
`&&` 表示继发执行（即只有前一个任务成功，才执行下一个任务）

http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html


参考：https://juejin.im/post/5dff8a26e51d4558105420ed


## WebWorker
由于实例化 webWorker 时，参数是一个 js 文件路径且不能跨域，所以我们单独创建一个 hash.js 文件放在 public 目录下，另外在 worker 中也是不允许访问 dom 的，但它提供了importScripts 函数用于导入外部脚本，通过它导入 spark-md5