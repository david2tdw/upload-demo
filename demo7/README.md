## 多文件上传之预览 + 多进度条 + 取消

更改网络 为slow 3g，就可以比较明显的看到进度条了
为了预览的需要，我们这里选择上传图片文件，其他类型的也一样，只是预览不方便
页面内增加一个多图预览的容器div.img-box
根据选择的文件信息动态创建所属的预览区域和进度条以及取消按钮
为取消按钮绑定事件，调用xhr.abort();终止上传
使用window.URL.createObjectURL预览图片，在图片加载成功后需要清除使用的内存window.URL.revokeObjectURL(this.src);