// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const distance = street - 42;
    return Math.abs(distance);
}

function distanceFromHqInFeet(street){
    const blocks = distanceFromHqInBlocks(street);
    return (blocks *264);
}

function distanceTravelledInFeet(start, destination){
    const coveredDistance = start - destination;
    return Math.abs(coveredDistance)*264;
}

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    if(distance>0  &&  distance <= 400){
        return 0;
    }
    else if(distance>400 && distance <= 2000){
        return (0.02 * (distance-400));
    }
    else if (distance > 2000 && distance < 2500){
        return(25);
    }
    else{
        return "cannot travel that far";
    }
}