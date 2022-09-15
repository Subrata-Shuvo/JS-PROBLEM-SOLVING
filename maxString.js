function bestFriend(array){
    let max_str = array[0].length;
    let ans = array[0];

    for( let i = 1; i < array.length; i++) {
        let max = array[i].length;
        if ( max > max_str) {
            ans = array[i];
            max_str = max;
        }
    }
    return ans;
}


console.log(bestFriend(["Subrata", "Dulal", "Somalota"]));