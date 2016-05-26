var s = 1; // this sets speed of animation
var holderId = 'shortScreen'; // this is id of element which is holding animation
var shortlistClassname = 'shortRoll'; // this is class of div that will be aimated

var c;
var rollerHolder;
var rollerHolderCon;
var dists;
var itWid;
var scrWid;
var choser;
var ds;
var lists;
var roller;
var a;

function multiplicator(){
c = 0;
rollerHolder = document.getElementById(holderId);
rollerHolderCon = rollerHolder.innerHTML;
dists = rollerHolder.getElementsByTagName('div');
itWid = dists[0].offsetWidth;
scrWid = rollerHolder.offsetWidth;
choser = scrWid/itWid;

if(choser > 2 && choser < 100){
choser = Math.ceil(choser);
}
else{
choser = 2;
}

for(i=0;i<choser;i++){
rollerHolder.innerHTML = rollerHolder.innerHTML + rollerHolderCon;
}

ds = s;
rollerHolder.onmouseover = function(){
ds=0;
}
rollerHolder.onmouseout = function(){
ds=s;
}

lists = rollerHolder.getElementsByTagName('div');
roller = new Array();
a = new Array();
for(i=0;i<lists.length;i++){
if(lists[i].className == shortlistClassname){
lists[i].id = 'roller' + c;
roller[c] = document.getElementById('roller' + c);
a[c] = 0;
c++;
}
}
setInterval('animate()', 60);
}

function animate(){
c = new Array();
for(k=0;k<roller.length;k++){
c[k] = k*itWid;

roller[k].style.left = c[k] + a[k] + 'px';
if(c[k] + a[k] < -itWid){
a[k] = eval(choser*itWid) - c[k];
}
a[k] = a[k] - ds;
}
}
setTimeout("multiplicator()", 1500);