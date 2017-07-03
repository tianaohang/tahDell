<?php
         header('content-type:text/plain;charset=utf-8');
         $uname=$_REQUEST['uname'];
         $upwd=$_REQUEST['upwd'];
         $uemail=$_REQUEST['uemail'];
         $bgo=$_REQUEST['bgo'];
         $age=$_REQUEST['age'];
         $birth=$_REQUEST['birth'];

         $link=mysqli_connect('localhost','root','','app_dell',3306);
         mysqli_query($link,'set names utf8');

         $sql="insert into user values(null,'$uname','$upwd','uemail','$bgo','$age','$birth')";
         $res=mysqli_query($link,$sql);
         if($res){
             echo 'succ';
         }else{
             echo 'err';
         }