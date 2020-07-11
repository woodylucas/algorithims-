// Frequency Counter 

// frequency counters 

function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    const counter1 = {};
    const counter2 = {}; 
    
    if(str1.length !== str2.length) return false; 
    
    for(const elem of arr1) {
        counter1[elem] = (counter1[elem] || 0 ) + 1; 
    }
    
    for(const elem of arr2) {
        counter2[elem] = (counter2[elem] || 0 ) + 1;
    }
    
    for(const key in counter1) {
        if(!(key in counter2)) return false; 
        if(counter1[key] !== counter2[key] ) return false;
    }
    return true;
   
    
    
  }

