window.onload=function(){
	$('#header').load('data/header.php');
	$('#footer').load('data/footer.php');
	$('#legal').load('data/legal.php');
}
$('.panel-body>a').click(function(e){
	e.preventDefault();
	location.href='index.html';
})
var num=5;
var timer=setInterval(function(){
	num--;$('.panel-heading span').html(num);
	if(num<1){
		clearInterval(timer,1000);
	}
},1000)
var timer1=setTimeout(function(){
	location='index.html'
},5000)