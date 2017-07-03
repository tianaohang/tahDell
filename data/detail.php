<?php
   header('Content-Type:application/json;charset=utf-8');

   $pid=$_REQUEST['pid'];

    $link=mysqli_connect('localhost','root','','app_dell',3306);
    mysqli_query($link,'set names utf8');
    $sql="select * from dell_prodinfo where pid='$pid'";
    $res=mysqli_query($link,$sql);

    if($res){
        $result=mysqli_fetch_all($res,MYSQLI_ASSOC);
        echo json_encode($result);
    }else{
        return;
    }