const Controller = require('./controller')
const http = require('http')
const server = http.createServer() // 返回 http.Server 类

const controller = new Controller()


server.on('request', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.status = 200
        res.end()
        return
    }

    if (req.url === '/verify') {
        await controller.handleVerifyUpload(req, res)
        return
    }

    if (req.url === '/merge') {
        await controller.handleMerge(req, res)
        return
    }

    if (req.url === '/') {
        await controller.handleFormData(req, res)
    }
})

server.listen(8100, () => {
    console.log('正在监听 8100 端口')
})