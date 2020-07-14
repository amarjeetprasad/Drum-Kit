// document.querySelector(".button").addEventListener("click",myFunc);
// function myFunc()
// {
//     alert("hello");
// }

buttons=document.querySelectorAll("button");
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function (){
        switch(this.innerHTML)
        {
            case "w":
            {
            var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            }break;
            case "a":
            {
            var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            }break;
            case "s":
            {
            var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            }break;
            case "d":
            {
            var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            }break;
            case "j" :
            {
            var audio = new Audio('sounds/snare.mp3');
                audio.play();
            }break;
            case "k":
            {
            var audio = new Audio('sounds/crash.mp3');
                audio.play();
            }break;
            case "l":
            {
            var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            }break;
            default:console.log(this.innerHTML);
        }
    })
}


//Key event listener

document.addEventListener("keypress",function(event){
    switch(event.key)
    {
        case "w":
        {
        var audio = new Audio('sounds/tom-1.mp3');
            audio.play();

        document.querySelector(".w").style.boxShadow="0 10px 10px red";

        document.addEventListener("keyup",function(e){
            document.querySelector(".w").style.boxShadow="none";
        })

        }break;
        case "a":
        {
        var audio = new Audio('sounds/tom-2.mp3');
            audio.play();

        document.querySelector(".a").style.boxShadow="0 10px 10px red";

        document.addEventListener("keyup",function(e){
            document.querySelector(".a").style.boxShadow="none";
        })

        }break;
        case "s":
        {
        var audio = new Audio('sounds/tom-3.mp3');
            audio.play();

        document.querySelector(".s").style.boxShadow="0 10px 10px red";

        document.addEventListener("keyup",function(e){
            document.querySelector(".s").style.boxShadow="none";
        })
        }break;
        case "d":
        {
        var audio = new Audio('sounds/tom-4.mp3');
            audio.play();

        document.querySelector(".d").style.boxShadow="0 10px 10px red";

        document.addEventListener("keyup",function(e){
            document.querySelector(".d").style.boxShadow="none";
        })  

        }break;
        case "j" :
        {
        var audio = new Audio('sounds/snare.mp3');
            audio.play();

        document.querySelector(".j").style.boxShadow="0 10px 10px red";

        document.addEventListener("keyup",function(e){
            document.querySelector(".j").style.boxShadow="none";
        })

        }break;
        case "k":
        {
        var audio = new Audio('sounds/crash.mp3');
            audio.play();

        document.querySelector(".k").style.boxShadow="0 10px 10px red";

        document.addEventListener("keyup",function(e){
            document.querySelector(".k").style.boxShadow="none";
        })

        }break;
        case "l":
        {
        var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();

        document.querySelector(".l").style.boxShadow="0 10px 10px red";

        document.addEventListener("keyup",function(e){
            document.querySelector(".l").style.boxShadow="none";
        })

        }break;
        default:console.log(this.innerHTML);
    }
})

