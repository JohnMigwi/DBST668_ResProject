console.log ( "directory name =" + __dirname);

console.log ("filename = " + __filename);

function myInterval(){
    setInterval(() =>{
        console.log("hello Node");
     }, 1000);
}

setTimeout ( () =>{
        myInterval();
},5000)
