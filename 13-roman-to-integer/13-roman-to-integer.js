/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const strsplit = s.split('');
    console.log(strsplit);
    let result = 0;
    for (let i = 0; i < strsplit.length ; i++) {
         switch (strsplit[i]) {
            case 'I':
                if (strsplit[i+1] == 'V') {
                    result = result + 4
                    break;
                }else if (strsplit[i+1] == 'X') {
                    result = result + 9
                    break;
                }else if(strsplit[i+1] !== 'X'){
                    result = result + 1
                    break;
                }else if(strsplit[i+1] !== 'V'){
                    result = result + 1
                    break;
                }
                
               
            case 'V':
                if (strsplit[i-1] == 'I') {
                     
                    break;
                }else if(strsplit[i-1] !== 'I'){
                    result = result + 5
                    break;
                }
             
            case 'X':
                if (strsplit[i+1] == 'C') {
                    result = result + 90
                    break;
                }else if (strsplit[i+1] == 'L') {
                    result = result + 40
                    break;
                }else if (strsplit[i-1] == 'I') {
                    break;
                }else if(strsplit[i+1] !== 'C' || strsplit[i+1] !== 'M' || strsplit[i+1] !== 'I' || strsplit[i+1] !== 'L'){
                    result = result + 10
                    break;
                }
                
            case 'L':
                  if (strsplit[i-1] == 'X') {
                    break;
                }else if(strsplit[i-1] !== 'X' ){
                    result = result + 50
                    break;
                }
            
            case 'C':
                if (strsplit[i-1] == 'X') {
                    break;
                }else if (strsplit[i+1] == 'M') {
                    result = result + 900
                    break;
                }else if (strsplit[i+1] == 'D') {
                    result = result + 400
                    break;
                    
                }else{
                    result = result + 100
                    break;

                }
              
            case 'D':
                  if (strsplit[i-1] == 'C') {
                    break;
                }else if(strsplit[i-1] !== 'C'){
                result = result + 500
                break;
                }
            case 'M':
                if (strsplit[i-1] == 'C') {
                    break;
                }else if(strsplit[i-1] !== 'C' ){
                    result = result + 1000
                    break;
                }
               
            default:
                console,log("not found")
                break;
         }
        
    }
    return result
    
};