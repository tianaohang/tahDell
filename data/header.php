<?php
	header('Content-Type:text/html;charset=utf-8');
?>
   <style> #shCart{
             display: inline-block;
             color:#fff;
             transform: scale(1.5);
             margin-top:2em;
             cursor:pointer;
           }</style>
 <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="row">
                <div class="col-xs-7">
                    <div class="navbar-header">
                        <a href="#" class="navbar-brand">
                            <img src="images/logo.png" alt="" class="logo"/>
                        </a>
                        <a class="navbar-toggle" href="#dell-menu" data-toggle="collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                    </div>
                    <div class="navbar-collapse collapse" id="dell-menu">
                        <ul class="nav navbar-nav">
                            <li class="active dropdown">
                                <a href="#" data-toggle="dropdown">家人与个人产品
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">热卖促销</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">笔记本</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">台式机和一体机</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">XPS系列</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Alienware 游戏电脑</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">显示器、外设产品和软件</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">戴尔卓●悦服务和续保商店</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">快速递送</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav">
                            <li class="active dropdown">
                                <a href="#" data-toggle="dropdown">商用产品
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">热卖促销</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">笔记本</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">台式机和一体机</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">专业级工作站</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">服务器、存储器及网络交换机</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">显示器及外设产品和软件</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">解决方案和服务</a></li>
                                    <li class="divider"></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav">
                            <li class="active dropdown">
                                <a href="#" data-toggle="dropdown">技术支持
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">家庭与个人产品</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">商用产品</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">支持服务点</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-3">
                    <div class="row">
                        <div class="col-lg-3 hidden-md col-xs-3">
                            <a href="#" class="msear" id="mainSearch">
                                <span class="glyphicon glyphicon-search" id="ss-out"></span>
                            </a>
                        </div>
                        <div class="col-md-9 hidden-sm hidden-xs">
                        <form class="navbar-form navbar-right">
                            <div class="form-group rela">
                                <label for="Search" class="sr-only">关键字或E-value代码查询</label>
                                <input type="text" id="Search" class="form-control" placeholder="关键字查询"/>
                                <button type="button" class="btn btn-success glyphicon glyphicon-search" id="Evalue"></button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <div class="col-xs-2">
                    <div class="row">
                        <div class="col-md-9 hidden-sm hidden-xs">
                            <a href="#login" data-toggle="modal" class="mlog">登陆我的账号</a></div>
                        <div class="col-md-3" id='changeCar'>
                            <span class="glyphicon glyphicon-shopping-cart" id="shCart"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var uemail=sessionStorage.getItem('uemail');
        $('.mlog').html(uemail);
        if(uemail){
            $('#shCart').click(function(){location.href='shopping_cart.html'});
        }else{
            $('#shCart').click(function(){location.href='returnIndex.html'});
        }
    </script>