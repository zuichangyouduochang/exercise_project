"use district"
function test(){
    message= "hi";
}
test();
alert(message);//cuowu

var message="喵喵喵 some thing";//只要不是数字都输出的是string 咩
alert(typeof message); //"string" some呢被吃掉啦
alert(typeof(message));
alert(typeof 95);
alert(typeof null);

var message2;
alert(message2==undefined);//为啥子我输出的是false？？？？？？我明白了前面的message是喵喵喵喵

var message3=undefined;
alert(message3==undefined);

var message4;
alert(message4);//唔，那多次声明还是用第一次的值啊
alert(age);//

var car=null;
alert(typeof car);