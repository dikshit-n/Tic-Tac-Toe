var b1=document.getElementById("one")
var b2=document.getElementById("two")
var b3=document.getElementById("three")
var b4=document.getElementById("four")
var b5=document.getElementById("five")
var b6=document.getElementById("six")
var b7=document.getElementById("seven")
var b8=document.getElementById("eight")
var b9=document.getElementById("nine")
var x=document.getElementById("xbtn")
var o=document.getElementById("obtn")
var ans=document.getElementById("ans")
var value
var i=0
var m
var p;
var mo=0
var xo=[2,2]
var xr
var or
var xw
var ow
var c=[2,2,2,2,2,2,2,2,2]
var j
// style="box-shadow:-2px -5px 0px rgb(0, 0, 0) ;"
x.addEventListener("click",function(){
  ans.innerHTML='<h1><br></h1>'
  j=0
if(xo[0]==2){
two()
value=['X','O']
x.style="background-color:red;"
xr=1
or=0
o.style="background-color:#6666ff;"
ow=1
xw=0
xo[0]=1
xo[1]=2
}
})
o.addEventListener("click",function(){
  ans.innerHTML='<h1><br></h1>'
  j=0
if(xo[1]==2){
  two()
value=['O','X']
o.style="background-color:red;"
or=1
xr=0
x.style="background-color:#6666ff;"
xw=1
ow=0
xo[0]=2
xo[1]=1
}
})
o.addEventListener("mouseover",function(){
o.style="cursor:pointer"
})
function cursor(){
  x.addEventListener("mouseover",function(){
    if(xr)
    x.style="cursor:not-allowed; background-color:red;"
    else if(xw)
    x.style="cursor:not-allowed; background-color:#6666ff;"
  })
  o.addEventListener("mouseover",function(){
    if(or)
    o.style="cursor:not-allowed; background-color:red;"
    else if(ow)
    o.style="cursor:not-allowed; background-color:#6666ff;"
  })
}
b1.addEventListener("click",function(){
if(c[0]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
    check1()
c[0]=m
if(m==1)
b1.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b1.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b2.addEventListener("click",function(){
if(c[1]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[1]=m
if(m==1)
b2.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b2.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b3.addEventListener("click",function(){
if(c[2]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[2]=m
if(m==1)
b3.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b3.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b4.addEventListener("click",function(){
if(c[3]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[3]=m
if(m==1)
b4.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b4.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b5.addEventListener("click",function(){
if(c[4]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[4]=m
if(m==1)
b5.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b5.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b6.addEventListener("click",function(){
if(c[5]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[5]=m
if(m==1)
b6.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b6.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b7.addEventListener("click",function(){
if(c[6]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[6]=m;
if(m==1)
b7.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b7.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b8.addEventListener("click",function(){
if(c[7]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[7]=m
if(m==1)
b8.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b8.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
b9.addEventListener("click",function(){
if(c[8]==2){
  if(xo[0]==1 || xo[1]==1)
  {
    xo[0]=1
    xo[1]=1
    cursor()
  }
check1()
c[8]=m
if(m==1)
b9.innerHTML='<img style="width:59px; height:59px"; src="x.jpg"/>'
else if(m==0)
b9.innerHTML='<img style="width:59px; height:59px"; src="o.jpg"/>'
check();
}
})
function val()
{
i++
if(i>1){
    i=0
}
}
function check1(){
  if(xo[0]==2 || xo[1]==2){
    ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">CHOOSE X OR O</h1>'
    j=1
  }
 else if(value[i]=='X')
 {
 m=1
 val()
 }
else if(value[i]=='O')
{
m=0
val()
}
}
function check(){
if(j!=1){
mo+=1
if(c[0]==1 && c[1]==1 && c[2]==1)
{
  final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
re();
}
else if(c[3]==1 && c[4]==1 && c[5]==1)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
    re();
}
else if(c[6]==1 && c[7]==1 && c[8]==1)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
    re();
}
else if(c[0]==1 && c[3]==1 && c[6]==1)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
    re();
}
else if(c[1]==1 && c[4]==1 && c[7]==1)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
    re();
}
else if(c[2]==1 && c[5]==1 && c[8]==1)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
    re();
}
else if(c[0]==1 && c[4]==1 && c[8]==1)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
    re();
}
else if(c[2]==1 && c[4]==1 && c[6]==1)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player X wins"</h1>'},100)
    re();
}
else if(c[0]==0 && c[1]==0 && c[2]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(c[3]==0 && c[4]==0 && c[5]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(c[6]==0 && c[7]==0 && c[8]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(c[0]==0 && c[3]==0 && c[6]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(c[1]==0 && c[4]==0 && c[7]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(c[2]==0 && c[5]==0 && c[8]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(c[0]==0 && c[4]==0 && c[8]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(c[2]==0 && c[4]==0 && c[6]==0)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"Player O wins"</h1>'},100)
    re();
}
else if(mo==9)
{
    final()
    setTimeout(function(){ans.innerHTML='<h1 style="color:white; font-family: "Times New Roman", Times, serif;">"MATCH DRAW"</h1>'},100)
    re();
}
}
}
function re(){
setInterval(load,2000)
}
function load(){
location.reload(true)
}
function final(){
for(var xxx=0;xxx<=8;xxx++)
c[xxx]=1
}
function two(){
  for(var zz=0;zz<=8;zz++)
  c[zz]=2
}
// function choose(){
//   ans.innerHTML="<h1>CHOOSE X OR O</h1>"
// }
