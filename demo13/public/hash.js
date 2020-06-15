self.importScripts('/spark-md5.min.js') // 导入脚本

// 生成文件 hash

self.onmessage = e => {
  const { fileChunkList } = e.data
  const spark = new self.SparkMD5.ArrayBuffer()
  let percentage = 0
  let count = 0
  const loadNext = index => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
    const reader = new FileReader()
    reader.readAsArrayBuffer(fileChunkList[index].file)
    // 处理load事件。该事件在读取操作完成时触发。
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload
    reader.onload = e => {
      count ++
      // event.target.result: 文件里的文本内容
      spark.append(e.target.result)
      if (count === fileChunkList.length) {
        self.postMessage({
          percentage: 100,
          hash: spark.end()
        })
        self.close()
      } else {
        // percentage = （percentage + 100）/ fileChunkList.length
        percentage += 100 / fileChunkList.length
        self.postMessage({
          percentage
        })
        loadNext(count)
      }
    }
  }

  // 调用函数
  loadNext(0)
}