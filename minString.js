function minString(array){
    let min_str = array[0].length;
    let ans = array[0];

    for (let i = 1; i < array.length; i++) {
        let min = array[i].length;
        if ( min < min_str) {
            ans = array[i];
            min_str = min;
        }
        return ans;
    }
}

console.log(minString(["Subrata", "Dulal", "Somalota"]));