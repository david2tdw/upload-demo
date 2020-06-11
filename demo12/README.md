https://juejin.im/post/5dff8a26e51d4558105420ed


## WebWorker
由于实例化 webWorker 时，参数是一个 js 文件路径且不能跨域，所以我们单独创建一个 hash.js 文件放在 public 目录下，另外在 worker 中也是不允许访问 dom 的，但它提供了importScripts 函数用于导入外部脚本，通过它导入 spark-md5
