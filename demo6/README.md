  <section>
    <p>Network选slow 3G</p>
    <p>页面内增加一个用于显示进度的标签 div.progress</p>
    <p>js 内处理增加进度处理的监听函数xhr.upload.onprogress</p>
    <p>event.lengthComputable这是一个状态，表示发送的长度有了变化，可计算</p>
    <p>event.loaded表示发送了多少字节</p>
    <p>event.total表示文件总大小</p>
    <p>根据event.loaded和event.total计算进度，渲染div.progress</p>
    <p>xhr.upload.onprogress要写在xhr.send方法前面，否则event.lengthComputable状态不会改变，只有在最后一次才能获得，也就是100%的时候.</p>
  </section>
