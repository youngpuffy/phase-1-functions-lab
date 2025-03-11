// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42)
  }
function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
  }

 function calculatesFarePrice(start, destination) {
   const pickUp= distanceTravelledInFeet(start, destination)
    if(pickUp <=400 ){
        return 0;
    }
    if(pickUp > 400 && pickUp<= 2000){
        return (pickUp - 400)* 0.02
    }
    if(pickUp >2000 && pickUp<=2500){
        return 25
    }
    if(pickUp >2500){
        return 'cannot travel that far'
    }
  }