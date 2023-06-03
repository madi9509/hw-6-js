// function slice(array, begin, end) {
    //     let tempArray =[];
      
    //     if(end===undefined || end > array.length)
    //       end = array.length;
      
    //     for (let i = begin; i < end; i++) {
    //       tempArray.push(array[i]);
    //     }
    //     return tempArray;
    //   }
      
    //    console.log(slice(['m', 'a','d','i'],1,3));
    
    
    //    function subString(num1, num2) {
    //     var str = "My name is...";
    //     var subStr = "";
    //     var len = str.length;
      
    //     if (num1 < 0 || num2 > len) {
    //       console.log("Invalid input");
    //     } else {
    //       var k = 0;
    //       for (i = num1; i < num2; i++) {
    //         subStr = subStr + str[i];
    //         k++;
    //       }
    //       console.log(subStr);
    //     }
    //   }
    //  console.log(subString(0, 7));
    
    
    // const indexOf =  function(stringToCheck, pos) {
    //     let index=[];
    //       for (let i = 0; i < stringToCheck.length;i++) {
    //         if (stringToCheck[i] === pos) {
    //           index.push(i);
    //         }
    //       }
    //     console.log(index)
    //     }
        
    //     console.log(indexOf('My name is John', 'n'));
        
    
        function repeatStr(str, num) {
            var result = "";
            var i;
            for (i = 0; i < num; i++) {
                result = result + str;
            }
            return result;
        }
    
        console.log(repeatStr('abcd', 3));