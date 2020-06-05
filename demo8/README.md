## 步骤
定义一个允许拖放文件的区域div.drop-box
取消drop 事件的默认行为e.preventDefault();，不然浏览器会直接打开文件
为拖拽区域绑定事件,鼠标在拖拽区域上 dragover, 鼠标离开拖拽区域dragleave, 在拖拽区域上释放文件drop
drop事件内获得文件信息e.dataTransfer.files

## 其他
target.addEventListener(type, listener, useCapture);
useCapture 默认为 false 。 事件沿DOM树向上冒泡的时候会触发listener。