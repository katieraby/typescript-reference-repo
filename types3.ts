function cal(val1: number, val2: number): number {
  //the colon after the args is the type of the function return
  let total = val1 + val2;
  //you can also add this type to the total variable instead of next to the params to keep things super strict
  return total;
}

cal(2, 2);
