[onpaste 事件](https://www.runoob.com/jsref/event-onpaste.html)
div设置 contenteditable 为 "true", 支持onpaste事件。

[ClipboardEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent)


ClipboardEvent.clipboardData -> DataTransfer -> DataTransfer.items -> DataTransferItemList (DataTransferItem 对象的数组) -> DataTransferItem.getAsFile() -> File对象



https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent
https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer
https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItemList
https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItem


note: 只能在网页上复制图片，本地图片复制并不在剪贴板里。
具体上传参考下文：
[直接剪切板粘贴上传图片的前端JS实现](https://www.zhangxinxu.com/wordpress/2018/09/ajax-upload-image-from-clipboard/)
