set names utf8;
DROP DATABASE IF EXISTS app_dell;
create database app_dell charset=utf8;
use app_dell;
create table user(
    uid int primary key auto_increment,
    uname varchar(50),
    uemail varchar(50),
    upwd varchar(32),
    bgo varchar(50),
    age int,
    birth varchar(50)
);
insert into user values(null,'田','123456@qq.com','123456','tah.applize.com',22,'1994/10/02');