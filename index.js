// function that returns a distance in blocks
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42;
    }
    else {
        return 42 - someValue;
    }
}

// function that returns distance in feet
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

// function that returns distance in feet given starting and ending block
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}

// function that returns fare given starting and ending block
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    }
    else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}