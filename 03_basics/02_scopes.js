// var c = 300
let a = 300

//braces ke bahar global scop
//curly braces shows scop

if (true){     //block scop
    let a = 10
    const b = 20
    // var c = 30  //classic variable
    console.log("INNER: ",a);
    
}
//console me example run karte he to global scop alag he or code environment me node ke through karte he to global scop alag he.....(remeber it always)



console.log(a);
// console.log(b);
// console.log(c);
