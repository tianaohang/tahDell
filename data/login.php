<?php
    header('Content-Type:text/plain;charset=utf-8');
    $uemail=$_REQUEST['uemail'];
    $upwd=$_REQUEST['upwd'];
    $link=mysqli_connect('localhost','root','','app_dell',3306);
    mysqli_query($link,'set names utf8');
    $sql="select * from user where uemail='$uemail' and upwd='$upwd'";
    $res=mysqli_query($link,$sql);
    if($res){
        $result=mysqli_fetch_all($res,MYSQLI_ASSOC);
        if($result){
            echo 'succ';
        }else{
            echo 'err';
        }
    }