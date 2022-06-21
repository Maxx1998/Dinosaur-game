"use strict";

const character=document.querySelector(".character");
const block=document.querySelector(".block");
function jump()
{
    if(character.classList!="animate")
    {
        character.classList.add("animate");
    }

    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

document.addEventListener("keydown",function(e)
{
    if(e.keyCode=== 32||e.code=== "Space")
    {jump();}
});

document.addEventListener("click",jump);

var checkDead=setInterval(function()
{
var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("Top"));

var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("Left"));


if(blockLeft<50&&blockLeft>0&&characterTop>=110)
{
    alert("You lose!");
    block.style.animation="none";
    block.style.display="none";
}

},10);

