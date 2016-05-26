var s = 1; // this sets speed of animation, higher nunber means higher speed
var shortlistClassname = 'shortRoll'; // this is class of div that will be rolled
var holderId = 'shortScreen'; // this is id of div that hold animation

//don't edit things under this
var c = 0;
var rollerHolder = document.getElementById(holderId);
rollerHolder.innerHTML = rollerHolder.innerHTML + rollerHolder.innerHTML;
var ds = s;
rollerHolder.onmouseover = function(){
ds=0;
}
rollerHolder.onmouseout = function(){
ds=s;
}
var lists = rollerHolder.getElementsByTagName('div');
for(i=0;i<lists.length;i++){
if(lists[i].className == shortlistClassname){
lists[i].id = 'roller' + c;
c++;
}
}
var roller0 = document.getElementById('roller0');
var roller1 = document.getElementById('roller1');
var a = 0;
var b = 0;
roller0.style.left = a + 'px';
roller1.style.left = roller0.offsetWidth + 'px';
var firstTopper = roller0.style.left;
firstTopper = firstTopper.replace('px','');
firstTopper = eval(firstTopper);
var secondTopper = roller1.style.left;
secondTopper = secondTopper.replace('px','');
secondTopper = eval(secondTopper);
rollerHolder.style.width = roller0.scrollWidth + 'px';
function toto(){
roller0.style.left = firstTopper + a + 'px';
roller1.style.left = secondTopper + b + 'px';
a = a - ds;
b = b - ds;
setTimeout("toto()", 50);
if(a < -secondTopper){
a = secondTopper;
}
if(b < -2*secondTopper){
b = 0;
}
};
toto();