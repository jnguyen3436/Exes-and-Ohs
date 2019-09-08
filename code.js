function XO(str) {
    let hasX = 0;
    let hasO = 0;
    for(i =0;i<=str.length;i++)
    {
    if(str[i]==="x"||str[i]==="X")
      hasX++;
    if(str[i]==="o"||str[i]==="O")
      hasO++;
 
    }
    if(hasX===hasO||str==="")
    return true;
    
    else return false;
}
