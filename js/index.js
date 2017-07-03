//页头导航搜索开始
$('.co').click(function(){
	$("#simplify-search").slideUp();
})

$('#ss-out').click(function(){
	$("#simplify-search").slideDown();
})
//页头导航搜索结束

//地址选择开始
$('.citybtn').click(function(e){
	e.preventDefault();
	$('.dd-menu').slideToggle();
	ciSort();
})

function ciSort(){
	var op=document.getElementById('citySel').children;
}
//地址选择结束
//页尾地区及产品开始
$('.conCtrl').on('click','a',function(e){
	e.preventDefault();
	var $i=$(e.target).index();
	console.log($i);
	$('.cc-content>ul:eq('+$i+')').slideDown().siblings().slideUp();
	var time=10000;
	setTimeout(function(){$('.cc-content>ul').slideUp()},time);

})
//页尾地区及产品结束

//异步请求登陆框验证开始
$('#denglu').click(function(){
	var uemail=$('#Umail').val();
	var upwd=$('#Upwd').val();
	if(uemail||upwd) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					doResponse(xhr);
				} else {
					console.log('响应成功但有错误')
				}
			}
		}
		xhr.open('POST', 'data/login.php', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('uemail=' + uemail + '&upwd=' + upwd);
		doResponse = function (xhr) {
			if (xhr.responseText == 'err') {
				$('#errinfo').fadeIn();
			} else if (xhr.responseText == 'succ') {
				//$('#login').fadeOut().removeClass('in');
				//$('.modal-backdrop.fade.in').remove();
				//$('body').removeClass().css('paddingRight','0');
				$('.mlog').html(uemail);
				sessionStorage.setItem('uemail',uemail);
				//$('#welcome').children('p').html(uemail);
				//$('#welcome').animate({top:'70px'},1000);
				$('#denglu').attr('data-dismiss', 'modal').click();
				$('#Umail').val('');
				$('#Upwd').val('');
			}
		}
	}
})
$('#welcome').hover(function(){$(this).addClass('welc')},function(){$(this).removeClass('welc')});
$('#new-account').click(function(){
	window.location.href="register.html";
});;
//异步请求登陆框验证结束

//搜索框搜索开始
$('#Evalue').click(function(){
	var inp=$(this).prev().val();
	if(inp=='inspiron'){
		location.href='product.html';
	}
})
$('#ss-in').click(function(){
	var inp=$(this).prev().val();
	if(inp=='inspiron'){
		location.href='product.html';
	}
})
//搜索框搜索结束
