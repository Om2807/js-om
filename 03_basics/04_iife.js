// Immediatly Invoked function expressions (IIFE)

//global scop ke pollutions se kai bar problems hoti he to us 
// global scop ke jo variable hote he, jo bhi uske declarations hote he uske pollutions ko hata ne ke liye hamne IIFE ka use kiya..

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// ( function aurcode (){
//     console.log(`DB CONNECTED 2`);
// } )()

(  (name) => {
    //simple IIFE
    console.log(`DB CONNECTED 3 ${name}`)
} )("om")