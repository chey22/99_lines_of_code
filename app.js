
//for loop from 99 to 1; 
//for loop logs the song string
//if i=1 then log "1 line of code in the file, 1 line of code"
//

let friends = ["Tayler", "Jamie", "Emily", "Taryn", "Rachel"]


for (var i = 0; i < friends.length; i++) {

    for (var j = 99; j >= 0; j--) {
        if (j > 2) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.")
        } else if (j === 2) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.")
        } else if (j === 1) {
            console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.")
        } else if (j === 0) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + "'s job here is done, it's time for some fun, " + j + " lines of code in the file.")
        }
    }
}