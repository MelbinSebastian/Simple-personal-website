let number=document.getElementById("percent");

let counter=0;
setInterval(() => {

    if(counter== 65)
    {
        clearInterval();

    }
    else{
    counter += 1;
    percent.innerHTML=counter+"%";
    }
    
}, 30);



let a=document.getElementById("percent1");

let b=0;
setInterval(() => {

    if(b== 30)
    {
        clearInterval();

    }
    else{
    b += 1;
    percent1.innerHTML=b+"%";
    }
}, 60);



let c=document.getElementById("percent2");

let d=0;
setInterval(() => {

    if(d== 50)
    {
        clearInterval();

    }
    else{
    d += 1;
    percent2.innerHTML=d+"%";
    }
}, 40);


let e=document.getElementById("percent3");

let f=0;
setInterval(() => {

    if(f== 25)
    {
        clearInterval();

    }
    else{
    f += 1;
    percent3.innerHTML=f+"%";
    }
}, 80);




