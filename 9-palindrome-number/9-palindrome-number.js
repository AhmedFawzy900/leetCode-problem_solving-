/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }else{

        let rev = 0;
        let lastDeigit;
        let num = x
        while (x != 0) {
                lastDeigit = x % 10
                rev = rev * 10 + lastDeigit
                x = Math.floor(x/10) 
        }
        x = num
        console.log(rev , x);
        if (rev == x) {
            console.log(true);
           return true
        }else if(rev !== x){
            return false
        }
         
    }
};