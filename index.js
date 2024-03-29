// code your solution here
function saturdayFun (activity="roller-skate"){
    if (activity==="roller-skate"){
     return "This Saturday, I want to roller-skate!"};
    if (activity!=="roller-skate"){
        return "This Saturday, I want to bathe my dog!"};
};
function mondayWork (activity="go to the office"){
    if (activity==="go to the office"){
        return "This Monday, I will go to the office."};
    if (activity!=="go to the office"){
        return "This Monday, I will work from home."};
};
let wrapAdjective = function(style){
    if (style==="*"){
        return function(adjective="a hard woerker") {
            return `You are ${style}${adjective}${style}!`}
    }
    if (style==="||"){
        return function(adjective="a dedicated programmer"){
            return "You are " +style+adjective+style+ "!"}
    }
  }