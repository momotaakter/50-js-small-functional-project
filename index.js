//PROJECT-------------1
var date=document.getElementById('date');
setInterval(() => {
 var presentDate=new Date();
 date.innerHTML=presentDate.toDateString();
    
}, 100);



//02-PROJECT
var time=document.getElementById('time');
setInterval(() => {
    var presentTime=new Date();
    time.innerHTML=presentTime.toLocaleTimeString();
    
}, 100);


//03-PROJECT
function mybtn(){

    var result=document.getElementById('sum');
var a=prompt('Enter Your First Number');
var b=prompt('Enter Your Second Number');
var c=prompt('Enter Your Third Number');

a=parseInt(a);
b=parseInt(b);
c=parseInt(c);

var sum=a+b+c;

result.innerHTML=`the totall is:${sum}`;

}

//04-PROJECT
function myeven(){
    var evenNumber=document.getElementById('even');
var even=prompt('Enter a Number');

even=parseInt(even);
if(even%2==0){
    evenNumber.innerHTML=`It's Even Number`;

}
else{
    evenNumber.innerHTML=`It's Odd Number`;
}

}


//five project
const swapbtn=document.getElementById('swap');
const swapres=swapbtn.addEventListener('click',function myswap(){
let a=[2,3,4,5];
let b=[3,1,9,0];
 let getswap= [a,b]=[b,a]

 let swaptext=document.getElementById('swaptext');
  swaptext.innerHTML=getswap;

});


//six project
const kimi=document.getElementById('kimi').addEventListener('click',function kimi(){
    const getvalueinput=document.getElementById('kimiinput').value;
    
      const factor=0.62371;
      const getmiles=getvalueinput*factor;
      const spankimi=document.getElementById('kimitomile');
      spankimi.innerHTML=` the mile is:${getmiles}`

});



//seven project 
function cheak(){
    var value=document.getElementById('data').value;
    if(value>0){
        res=`${value} is a positive number.`;
    }
   
    else if(value<0){
        res=`${value} is a negative`
    }
    else if(value==0){
        res=`${value} is a zero number` ;
     }

    else{
        res=`${value} is not a number`
    }

document.getElementById('posinegnum').innerText=res;
}

//eight project
const mininum=()=>{

const minitxt=document.getElementById('minitext').value;
const getvlue=Math.min(minitxt);
const miniNum=document.getElementById('minimum');
miniNum.innerText=getvlue;
}
document.getElementById('mimibutton').addEventListener('click',mininum);

//nine project
/*const getidd=document.getElementById('idd').value;
const gettxt=document.getElementById('txt').value;
const geth=document.getElementById('iddd').value;
const a=parseInt(getidd);
const b=parseInt(gettxt);
const c=parseInt(geth);
console.log(a+b+c);
function myin(){
    const getidd=document.getElementById('idd').value;

    console.log(getidd)
    const gettxt=document.getElementById('txt').value;
    console.log(gettxt);

}*/

var f=document.getElementById('idd').addEventListener('click',function myf(){
const getvalue=document.getElementById('idd').value;
console.log(getvalue);

});

var g=document.getElementById('txt').addEventListener('click',function nyf(){
    const getplus=document.getElementById('txt').value;
    console.log(getplus);
})


var h=document.getElementById('iddd').addEventListener('click',function fyf(){
    const getplusd=document.getElementById('iddd').value;
    console.log(getplusd);
})

/*const getresult=document.getElementById('resullt').addEventListener('click',function resfunc(){
   var allsum=f+g+h;
   const getfinal=document.getElementById('resullt');
   getfinal.innerHTML=allsum;
});*/



    var f=document.getElementById('idd').addEventListener('click',function myf(){
        const getvalue=document.getElementById('idd').value;
       console.log(getvalue);
  
        
        });
        
        var g=document.getElementById('txt').addEventListener('click',function nyf(){
            const getplus=document.getElementById('txt').value;
            console.log(getplus);
        })
        
        
        var h=document.getElementById('iddd').addEventListener('click',function fyf(){
            const getplusd=document.getElementById('iddd').value;
         console.log(getplusd);
        

        });

   //10 number project
 for(i=0;i<=19;i++){
   setInterval(() => {
     const print=document.getElementById('printnumber');

   }, 1000);
 }


 //11 number project









   /* const gettxt=document.getElementById('txt').value;
    const geth=document.getElementById('iddd').value;
    const a=parseInt(getidd);
    const b=parseInt(gettxt);
    const c=parseInt(geth);
    console.log(a+b+c);


}*/