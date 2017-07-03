<?php
	header('Content-Type:text/html;charset=utf-8');
?>
<div class="container">
        <ul class="list-unstyled list-inline">
            <li><a href="#">法律法规</a></li>
            <li><a href="#">网站使用条款</a></li>
            <li><a href="#">条款和条件</a></li>
            <li><a href="#">您未解决的问题</a></li>
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">站点地图</a></li>
            <li><a href="#">戴尔资源回收</a></li>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">反馈</a></li>
        </ul>
        <p><a href="#">闽ICP备05032923号</a></p>
        <div class="conCtrl">
            <a href="#">产品 <span class="caret"></span></a>
            <a href="#">国家/地区 <span class="caret"></span></a>
        </div>
        <div class="cc-content">
            <ul class="list-unstyled list-inline">
                <li><a href="#">笔记本电脑</a></li>
                <li><a href="#">台式机及一体机电脑</a></li>
                <li><a href="#">热卖笔记本促销</a></li>
                <li><a href="#">二合一笔记本</a></li>
                <li><a href="#">商用笔记本及移动工作站</a></li>
                <li><a href="#">商用台式机及台式工作站</a></li>
                <li><a href="#">服务器</a></li>
                <li><a href="#">显示器</a></li>
                <li><a href="#">打印机</a></li>
                <li><a href="#">专业游戏笔记本及电脑</a></li>
                <li><a href="#">云计算</a></li>
                <li><a href="#">数据 存储</a></li>
                <li><a href="#">未来就绪的 IT</a></li>
                <li><a href="#">未来就绪的云</a></li>
                <li><a href="#">未来就绪的解决方案</a></li>
                <li><a href="#">未来就绪之首席信息官</a></li>
            </ul>
            <ul class="list-unstyled list-inline pla">
                <li><a href="#">AT</a></li>
                <li><a href="#">AU</a></li>
                <li><a href="#">BE</a></li>
                <li><a href="#">BR</a></li>
                <li><a href="#">CA</a></li>
                <li><a href="#">CH</a></li>
                <li><a href="#">CL</a></li>
                <li><a href="#">CO</a></li>
                <li><a href="#">DE</a></li>
                <li><a href="#">DK</a></li>
                <li><a href="#">ES</a></li>
                <li><a href="#">FR</a></li>
                <li><a href="#">FK</a></li>
                <li><a href="#">IE</a></li>
                <li><a href="#">IN</a></li>
                <li><a href="#">IT</a></li>
                <li><a href="#">JP</a></li>
                <li><a href="#">KR</a></li>
                <li><a href="#">MX</a></li>
                <li><a href="#">MY</a></li>
                <li><a href="#">NL</a></li>
                <li><a href="#">NO</a></li>
                <li><a href="#">PR</a></li>
                <li><a href="#">RU</a></li>
                <li><a href="#">SE</a></li>
                <li><a href="#">SG</a></li>
                <li><a href="#">UK</a></li>
                <li><a href="#">US</a></li>
                <li><a href="#">ALL</a></li>
            </ul>
        </div>
    </div>
    <script>
         $('.conCtrl').on('click','a',function(e){
         	e.preventDefault();
         	var $i=$(e.target).index();
         	console.log($i);
         	$('.cc-content>ul:eq('+$i+')').slideDown().siblings().slideUp();
         	var time=10000;
         	setTimeout(function(){$('.cc-content>ul').slideUp()},time);

         })
    </script>