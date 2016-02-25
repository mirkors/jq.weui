# jq.weui 移动端 UI插件
移动端 提升用户体验 的ui插件 ，插件本身为原生js语法，无需依赖 jquery ，zepto等插件

文档示例

# jq.alert(); 

//简洁使用 无回调

jq.alert('你好');

//自定义提示 

jq.alert('你好',function(){

alert('回调');

});


//自定义标题 自定义提示  回调
jq.alert('你好吗？','轻微提示',function(){

 alert('触发回调');

 }); 
 
 
# jq.loading();

jq.loading('加载中');

//一般 loading用在加载数据上， 加载数据完成后 用 jq.hideLoading 来销毁
jq.hideLoading();

#jq.msg();

jq.msg('支付成功',3000);

//3000 为 弹出层 消失时间




#jq.confirm();

jq.confirm('你确定要删除吗？',function(){

   jq.alert('你选择了确定');

},function(){

    jq.alert('你选择了取消');

  });
  
  
# 更多内容，以及具体使用方法请参考demo.html  

