// Code your solution in this file!
const headquarters = 42

function distanceFromHqInBlocks(start) {
  if (start > headquarters) {
    return start - headquarters
  } else {
    return headquarters - start
  }

}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264

}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264
  } else {
    return (destination - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0
  } else if (distance >= 400 && distance < 2000) {
    return ((distance - 400) * 2) / 100
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}