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


  // PSEUDOCODE 

  // CREATE a function declaration: sumZero
  // INPUT: arr --->  sorted integers 
  // FIND the elements that = 0 
  // RETURN the pair in new array with the elements that equal zero. 
  // CREATE a while loop 
  // have a variable that starts on the left and a varibale that starts from the right. 
  // WHILE left is less than right increment left decrement right; 
  // IF left + right  === 0 
  // RETURN [left, right];

  function sumZero(arr) {
      
      let left = 0
      let right = arr.length - 1 

      while(left < right) {
          let sum = arr[left] + arr[right]
          if (sum === 0) {
              [ arr[left], arr[right] ];
          } else if (sum > 0) {
              right--;
          } else {
              left++;
          }
      }
  }


