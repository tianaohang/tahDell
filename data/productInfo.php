<?php
    header('Content-type:application/json;charset=utf-8');
    $pageNum=$_REQUEST['pageNum'];

    $page=[
        'recordCount'=>0,
        'pageSize'=>8,
        'pageCount'=>0,
        'pageNum'=>intval($pageNum),
        'data'=>null
    ];


    $link=mysqli_connect('localhost','root','','app_dell',3306);
    mysqli_query($link,'set names utf8');
    $sql="select count(*) from dell_prodInfo";
    $res=mysqli_query($link,$sql);
    $result=mysqli_fetch_assoc($res);
    $page['recordCount']=intval($result['count(*)']);
    $page['pageCount']=ceil($page['recordCount']/$page['pageSize']);


    //$start=($page['pageNum']-1)*$page['pageSize'];
    $start=0;
    //$count=$page['pageSize'];
    $count=($page['pageNum'])*$page['pageSize'];
    $sql="select * from dell_prodInfo limit $start,$count";
    $res=mysqli_query($link,$sql);
    $page['data']=mysqli_fetch_all($res,MYSQLI_ASSOC);

    echo json_encode($page);