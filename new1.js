function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//------------------------------------------------------------------

const s = [5, 7, 2];
function editInPlace() {
  s.sort();

}
editInPlace();

//------------------------------------------------------------------

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
 Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//------------------------------------------------------------------



//------------------------------------------------------------------



//------------------------------------------------------------------



//------------------------------------------------------------------



//------------------------------------------------------------------
