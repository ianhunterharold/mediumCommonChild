const commonChild =(s1, s2) => {


  // still tinkering with the code 
    let splitS1 = s1.split('');
    let splitS2 = s2.split('');
  
    let longest = [];
    for (let i = 0; i < splitS1.length; i++){
      for (let j=0; j < splitS2.length; j++){
        if (splitS1[i] === splitS2[j]){
          let addTo = longest.push(splitS2[j]);
          let restructureS2 = splitS2.splice(splitS2[0],j+1)
          // removing any previous subsection of our second array not needed for further inspection 
          let turnBackToStr = splitS2.join('');
          commonChild(s1,turnBackToStr);
        }
      }
    }
    console.log(longest)
    return longest.length;
  };
  
  const s11= "SHINCHAN";
  const s22= "NOHARAAA";
  
  commonChild(s11,s22);
  
  // solve as human
    // go through the first word char by char and compare to the second word 
    // when a char matches, then add that charcter to a variable 
    // once you are done return the .length, if the string is blank then say 0 
  
  
  // solve as developer
  
  // nested loops, iterating through both strings
  // comparing char, match add to let longest.
  
  // return .length of longest 