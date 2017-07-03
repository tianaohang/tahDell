window.onload=function(){
	$('#header').load('data/header.php');
	$('#footer').load('data/footer.php');
	$('#legal').load('data/legal.php');
	loadProductInfoByPage(1);
}
$('#header').load(function(){
	var uemail=sessionStorage.getItem('uemail');
	console.log(uemail);
	console.log($('.mlog').html());
})
//分页加载商品介绍开始
var pageNum=1;
$('#btn_ad').click(function(){
	pageNum++;
	loadProductInfoByPage(pageNum);
})
function loadProductInfoByPage(pageNum){
	var html='';
	$.ajax({
		type:'POST',
		url:'data/productInfo.php?pageNum='+pageNum,
		success:function(page){
			for(var i in page.data){
				var result=page.data[i];
				if(page.data.length<36){
				html+=`
						<div class="row">
            <div class="col-sm-3 col-md-2 clearfix">
                <div class="infoText inOut">
                    <img src="images/redtriangle.png" alt=""/>
                    <span>畅销产品</span>
                </div>
                <div class="infoImg">
                    <a href="#">
                        <img src="images/${result.pic}" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-md-7">
                <h4>${result.pname}</h4>
                <p>${result.phead}</p>
                <ul>`;
					if(result.pdetail_fis!=null){html+=`
                    <li>${result.pdetail_fis}</li>`};
					if(result.pdetail_sc!=undefined){html+=`
                    <li>${result.pdetail_sc}</li>`};
					if(result.pdetail_th!=null){html+=`
                    <li>${result.pdetail_th}</li>`};
					if(result.pdetail_fo!=null){html+=`
                    <li>${result.pdetail_fo}</li>`};
					if(result.pdetail_fif!=null){html+=`
                    <li>${result.pdetail_fif}</li>`};
					html+=`
                </ul>
            </div>
            <div class="col-md-3">
                <input type="button" class="btn btn-primary search_detail" value="查看详情" data-i="${result.pid}"/>
                <input type="button" class="btn btn-warning add_cart" value="加入购入车"/>
            </div>
        </div>
				`;
				}else if(page.data.length>=36){
					html+=`
						<div class="row">
            <div class="col-sm-3 col-md-2 clearfix">
                <div class="infoText inOut">
                    <img src="images/redtriangle.png" alt=""/>
                    <span>畅销产品</span>
                </div>
                <div class="infoImg">
                    <a href="#">
                        <img src="images/${result.pic}" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-md-7">
                <h4>${result.pname}</h4>
                <p>${result.phead}</p>
                <ul>`;
					if(result.pdetail_fis!=null){html+=`
                    <li>${result.pdetail_fis}</li>`};
					if(result.pdetail_sc!=undefined){html+=`
                    <li>${result.pdetail_sc}</li>`};
					if(result.pdetail_th!=null){html+=`
                    <li>4${result.pdetail_th}</li>`};
					if(result.pdetail_fo!=null){html+=`
                    <li>${result.pdetail_fo}</li>`};
					if(result.pdetail_fif!=null){html+=`
                    <li>${result.pdetail_fif}</li>`};
					html+=`
                </ul>
            </div>
            <div class="col-md-3">
                <input type="button" class="btn btn-primary" value="查看详情"/>
                <input type="button" class="btn btn-warning" value="加入购入车"/>
            </div>
        </div>
				`;
					$('#alertInfo').fadeIn();
				}
			$('#listDetail').html(html);
			}
		}
	})
}
//分页加载商品介绍结束
$('#listDetail').on('click','.search_detail',function(){
    var pid=$(this).attr('data-i');
    sessionStorage.setItem('pid',pid);
    location='detail.html';
})