// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    let distance;
    
    if (blocks >= hq) {
        distance = blocks - hq;
    } else {
        distance = hq - blocks;
    }
    return distance;
}

function distanceFromHqInFeet(feet) {
    const hq = 42;
    let distance;

    if (feet >= hq) {
        distance = (feet - hq) * 264;
    } else {
        distance = (hq - feet) * 264;
    }
    return distance;
}

function distanceTravelledInFeet(start, destination) {
    let distance;

    if (start <= destination) {
        distance = (destination - start) * 264;
    } else {
        distance = (start - destination) * 264;
    }
    return distance;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    }else if (distance > 2000 && distance < 2500) {
        return 25;
    }else {
        return 'cannot travel that far';
    }
}
    
        

