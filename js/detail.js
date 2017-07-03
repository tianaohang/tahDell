window.onload=function(){
	$('#footer').load('data/footer.php');
	var pid=sessionStorage.getItem('pid');
	$.ajax({
		url:'data/detail.php',
		data:{pid:pid},
		success:function(data){
			console.log(data);
			var result=data[0];
			$('.magTitle').html(`<h1>${data[0].pname}</h1>`)
			$('.heroContent').html(`
				<img src="images/${data[0].pic_lg}" alt=""/>
            <div class="heroContent_Info">
                <h2>疯玩出彩</h2>
                <p>可选第六代酷睿处理器，大容量硬盘，配备光驱.</p>
                <h4>网上特惠价<span>RMB${data[0].price}</span>起</h4>
            </div>
			`)
			$('.recCon h4').html(`${data[0].pname}`);
			$('.switchCTA').html(`
					 <p><s class="rt">RMB ${Math.ceil(data[0].price/0.95)}</s></p>
                        <p>折扣 <span class="rt">RMB ${Math.ceil(data[0].price/0.95-data[0].price)}</span></p>
                        <div>特惠价 <span class="rt">RMB ${data[0].price}</span></div>
                        <div class="lowest">
                            <p><a href="#">最低仅 </a><span>RMB ${Math.ceil(data[0].price/24)}</span>/ <a href="#">月</a></p>
                            <p><img src="images/dollar.png" alt=""/>&nbsp; | &nbsp;<a href="#">查看分期详情</a></p>
                        </div>
			`)
		}
	})
}
//页面顶部下拉菜单
$('#list_1').on('click','>li',function(){
	$(this).addClass('active').siblings().removeClass('active');
})
$('#list_1').on('click','li a',function(e){
	e.preventDefault()
})
$('#list_2').on('click','>li',function(){
	$(this).addClass('active').siblings().removeClass('active');
})
$('#list_2').on('click','li a',function(e){
	e.preventDefault()
})
$('.rm_02>li:last-child').mouseenter(function(){
	$('#list_1>li').removeClass();
	$(this).parent().parent().parent().parent().removeClass();
})
//页面顶部下拉菜单结束

//产品配置导航条开始
$('.notification-anchor li').click(function(){
	$(this).addClass('active').siblings().removeClass();
})
$('.notification-anchor li>a').click(function(e){
	e.preventDefault();
})

function fixNav(){
	var totalTop_con=$('.config-0').offset().top;
	var scrollTop=$('body').scrollTop();
	var fHeight_con=parseFloat($(".config-0").css("height"))+parseFloat($(".config-0").css("marginTop"));
	if(scrollTop>=totalTop_con&&scrollTop<=(fHeight_con+totalTop_con-500)){
		//$('.notification-anchor').css('position','fixed').css('top','0');
		$('.config-rt').css('position','fixed').css('top','70px').css('right','170px');
	}else if(scrollTop>(fHeight_con+totalTop_con-500)&&scrollTop<=(fHeight_con+totalTop_con)){
		$('.config-rt').css('position','relative').css('top','2250px').css('right','0');
	}else{
		$('.config-rt').css('position','static').css('top','0').css('right','0');
	}
}
$(document).scroll(fixNav);

//电梯跳转
var elevator={
	totalTop:[],
	fHeight:[],
	bHeight:0,
	init:function(){
		for(var i=0;i<5;i++){
			this.fHeight.push(parseFloat($(".config-"+i).css("height"))+parseFloat($(".config-"+i).css("marginTop"))+parseFloat($(".config-"+i).css("marginBottom")));
		}
		for(var i=0;i<5;i++){
			this.totalTop.push(parseFloat($(".config-"+i).offset().top));
		}
		this.bHeight=parseFloat($(".notification-anchor").css("height"))+70;
		$(document).scroll(this.scroll.bind(this));
		$('.notification-anchor>ul').on('click','li',function(e){
			$('body').stop(true);
			var $ul=$(e.target).parent();
			var i=$ul.index();
			$('body').animate({scrollTop:this.totalTop[i]-this.bHeight},1500)
		}.bind(this))
	},
	scroll:function(){
		var scrollTop=$('body').scrollTop();
		$('.notification-anchor>ul>li').each(function(i,elem){
				if(scrollTop>=this.totalTop[0]&&scrollTop<=this.fHeight[0]+this.totalTop[0]-this.bHeight) {
					$('.notification-anchor>ul>li:eq('+0+')').addClass('active');
				}else{
					$('.notification-anchor>ul>li:eq('+0+')').removeClass('active');
				}
				if(scrollTop>=this.totalTop[1]-this.bHeight&&scrollTop<=this.fHeight[1]+this.totalTop[1]-this.bHeight) {
					$('.notification-anchor>ul>li:eq('+1+')').addClass('active');
				}else{
					$('.notification-anchor>ul>li:eq('+1+')').removeClass('active');
				}
				if(scrollTop>=this.totalTop[2]-this.bHeight&&scrollTop<=this.fHeight[2]+this.totalTop[2]-this.bHeight-30) {
					$('.notification-anchor>ul>li:eq('+2+')').addClass('active');
				}else{
					$('.notification-anchor>ul>li:eq('+2+')').removeClass('active');
				}
				if(scrollTop>=this.totalTop[3]-this.bHeight&&scrollTop<=this.fHeight[3]+this.totalTop[3]-this.bHeight-30) {
					$('.notification-anchor>ul>li:eq('+3+')').addClass('active');
				}else{
					$('.notification-anchor>ul>li:eq('+3+')').removeClass('active');
				}
				if(scrollTop>=this.totalTop[4]-this.bHeight&&scrollTop<=this.fHeight[4]+this.totalTop[4]-this.bHeight) {
					$('.notification-anchor>ul>li:eq('+4+')').addClass('active');
				}else{
					$('.notification-anchor>ul>li:eq('+4+')').removeClass('active');
				}
			var parentTotalTop=parseFloat($(".configStackBody").offset().top);
			var parentHeight=parseFloat($(".configStackBody").css("height"))+parseFloat($('.configStackBody').css('marginTop'))+parseFloat($('.configStackBody').css('marginBottom'));
			if(scrollTop>parentTotalTop&&scrollTop<=(parentHeight+parentTotalTop-250)){
				$('.notification-anchor').css('position','fixed').css('top','0');
			}else{
				$('.notification-anchor').css('position','static');
			}
		}.bind(this))
	}
}
elevator.init();
//产品配置导航条结束

//buyNow购买商品开始
$('#buyNow').click(function(){

})
//buyNow购买商品结束