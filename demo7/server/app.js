var http = require('http')
var path = require('path')

var fs = require('fs')
// https://github.com/koajs/koa
var Koa = require('koa')
// https://www.npmjs.com/package/koa-body
var koaBody = require('koa-body')
// https://www.npmjs.com/package/koa-static
var koaStatic = require('koa-static')
// https://www.npmjs.com/package/koa2-cors
var cors = require('koa2-cors')
const app = new Koa()
const port = process.env.PORT || '8100'
const uploadHost = `http://localhost:${port}/uploads`

// 设置上传文件的处理
app.use(
  koaBody({
    // https://github.com/node-formidable/formidable
    formidable: {
      // 设置文件的默认保存目录，不设置则保存在系统临时目录下
      // 临时文件名如：demo-1\static\uploads\upload_3a72161983225410d5e095368762c3b4
      uploadDir: path.resolve(__dirname, '../uploads'),
      multiples: true,
    },
    multipart: true, // 支持文件上传
  })
)

app.on('error', (err) => {
  console.error('server error', err)
})

//开启静态文件访问
app.use(koaStatic(path.resolve(__dirname, '../static')))
// 开启跨域
app.use(
  cors({
    origin: function (ctx) {
      return '*' // 允许来自所有域名请求
    },
  })
)

//二次处理文件，修改名称
app.use((ctx) => {
  console.log(ctx.request.files)
  let files = ctx.request.files ? ctx.request.files.f1 : [] // //得到上传文件的数组
  //单文件上传容错
  if (!Array.isArray(files)) {
    files = [files]
  }
  console.log(files)
  let result = []
  files &&
    files.forEach((file) => {
      const path = file.path.replace(/\\/g, '/')
      const fileName = file.name //原文件名称
      let nextPath = ''
      if (file.size > 0 && path) {
        // let extArr = fileName.split('.')
        // let ext = extArr[extArr.length - 1]
        console.log(path)
        nextPath = path.slice(0, path.lastIndexOf('/')) + '/' + fileName
        //重命名文件
        fs.renameSync(path, nextPath)
        result.push(uploadHost + nextPath.slice(nextPath.lastIndexOf('/')))
      }
    })
  ctx.body = `{
    "fileUrl": ${JSON.stringify(result)}
  }`
})

/**
 * http server
 */
var server = http.createServer(app.callback())
server.listen(port)
console.log(`demo7 server start, port is ${port} ......   `)
