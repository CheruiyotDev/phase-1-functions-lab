// Code your solution in this file!
const destination = 42;
const feetPerBlock = 264;

function distanceFromHqInBlocks(start) {
  if (start < destination) {
    return destination - start;
  } else {
    return start - destination;
  }
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * feetPerBlock;
  } else {
    return (start - destination) * feetPerBlock;
  }
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000 ) {
    return ((distance - 400) * 2)/ 100;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}