//创建匿名函数 防止污染全局
;! function(window, undefined) {


    window.jq = {
        ver: '1.0',
        author: 'jackey',
        level:2016001,

        //level 就是插件 在页面中 z-index, 由于是2016年第一个插件，所以为2016001

        init: function() {
            //初始化插件
            //获取js所在目录
            var js = document.scripts,
                script = js[js.length - 1],
                jsPath = script.src;
            if (script.getAttribute('merge')) return;
            var path = jsPath.substring(0, jsPath.lastIndexOf("/") + 1);

            var link = document.createElement("link");

            link.rel = "stylesheet";

            link.type = "text/css";

            //拼接起来 追加css到当前文档中
            link.href = path + 'weui.min.css';

            document.getElementsByTagName("head")[0].appendChild(link);



        },

        msg: function(title, time) {

            title = title ? title : '操作成功';
            if (time) {
                time = time;
                if (isNaN(time)) {
                    return false;
                }
            } else {
                time = 3000
            };

            var html = '<div class="weui_mask_transparent"></div>' + ' <div class="weui_toast">' + '     <i class="weui_icon_toast"></i>' + '     <p class="weui_toast_content">' + title + '</p>' + '</div>';


            jq._addDom('toast', 'toast', html);

            function hide() {

                jq._removeDom('toast')

            };

            setTimeout(hide, time);

        },
        alert: function(msg, title, yes) {
            
             if(title){


                title= (typeof(title)=="function")?"系统提示":title;   


             }else{

                title="系统提示";
             }


            var html = '<div class="weui_mask" style="z-index:'+jq.level+'"></div>' + '<div class="weui_dialog" style="z-index:'+(jq.level+1)+'">' + '<div class="weui_dialog_hd"><strong class="weui_dialog_title">' + title + '</strong></div>' + '<div class="weui_dialog_bd">' + msg + '</div>' + '<div class="weui_dialog_ft">' + '    <a href="javascript:;" class="weui_btn_dialog primary alertbtn" id="alertbtn">确定</a>' + '</div>' + '</div>';

            jq._addDom('dialog2', 'weui_dialog_alert', html);



            document.getElementById('alertbtn').addEventListener('click', function() {

                jq._removeDom('dialog2');


                if (typeof(yes) == 'function') {
                    yes();
                }

                if (typeof(title) == 'function') {
                    title();
                }


            });


        },


        confirm: function(msg, yes, cancer) {


            var html = '<div class="weui_mask" style="z-index:'+jq.level+'"></div>' + '<div class="weui_dialog" style="z-index:'+(jq.level+1)+'">' + '<div class="weui_dialog_hd"><strong class="weui_dialog_title">提示</strong></div>' + '<div class="weui_dialog_bd">' + msg + '</div>' + '<div class="weui_dialog_ft">' + '<a href="javascript:;" class="weui_btn_dialog default" id="confirmno">取消</a>' + '<a href="javascript:;" class="weui_btn_dialog primary" id="confirmyes">确定</a>' + '</div>' + '</div>';



            jq._addDom('dialog1', 'weui_dialog_confirm', html);



            document.getElementById('confirmyes').addEventListener('click', function() {

                jq._removeDom('dialog1');


                if (typeof(yes) == 'function') {
                    yes();
                }


            });


            document.getElementById('confirmno').addEventListener('click', function() {

                jq._removeDom('dialog1');


                if (typeof(cancer) == 'function') {
                    cancer();
                }


            });






        },

        /* 

            下个版本开发吧
            page:function(img,title,msg,yes,cancer){

             title=title?title:"操作成功";
             msg=msg?msg:"内容已提交";
             img=img?img:1;





            },

            */

        loading: function(title) {

            title = title ? title : "数据加载中";

            var html = '<div class="weui_mask_transparent" style="z-index:'+jq.leve+'"></div>' + ' <div class="weui_toast">' + '<div class="weui_loading">' + ' <div class="weui_loading_leaf weui_loading_leaf_0"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_1"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_2"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_3"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_4"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_5"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_6"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_7"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_8"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_9"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_10"></div>' + '   <div class="weui_loading_leaf weui_loading_leaf_11"></div>' + ' </div>' + '<p class="weui_toast_content">' + title + '</p>' + '</div>';



            jq._addDom('loadingToast', 'weui_loading_toast', html);



        },


        hideLoading: function() {
            //销毁loading


            jq._removeDom('loadingToast');





        },


        _addDom: function(domid, domclass, html) {


            /*
                       
                       1，遇到的第一个问题  给body下追加内容，用原生js 报错 Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

                         问题解决，是js权限问题，想给body下追加节点 必须是先创建一个div 然后把字符串插进这个div，无法把字符串直接 查到body下
                       */
            var winDiv = document.createElement('div');
            winDiv.id = domid;
            winDiv.className = domclass;
            winDiv.innerHTML = html;
            document.body.appendChild(winDiv);



        },


        _removeDom: function(id) {

            //删除dom
            var dom = document.getElementById(id);
            document.body.removeChild(dom)



        },



        _yes: function(yes) {
            //处理回调
            yes();


        }


    }
    jq.init();

}(window)