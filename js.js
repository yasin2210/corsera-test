var names = ["joe" , "alex" , "Jack", "emmanuel" , "philip"]
for(var i =0 ; i < 6 ; i++) {
    if (names[i][0] === "j" || names[i][0] === "J") {
        console.log("goodbye  " + names[i]);
    }else{
        console.log("hello  " + names[i]);
    }
}