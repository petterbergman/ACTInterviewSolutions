class Cars {

    //cars: number[]    An array of car slots, 1..10^5, assumed unique spots
    //k: number         Cars covered
    //return:           the minimum length of a roof that can cover k cars
    carParkingRoof(cars, k) {
        //Validate input
        if (!Array.isArray(cars)) {
            throw new Error('cars must be an array');
        }
        if (k < 1) {
            throw new Error('k must be larger than 0');
        }
        if (k >= cars.length) {
            throw new Error('k must be less than the number of cars');
        }

        //Sort the array of parked cars
        const sortedCars = cars.sort((a, b) => a - b);
        let n = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < (sortedCars.length - 1); i++) {
            let currentCarSpot = sortedCars[i];
            let nextCarSpot = sortedCars[i+1];
            //Validate array content for type
            if (!Number.isInteger(currentCarSpot) || !Number.isInteger(nextCarSpot)) {
                throw new Error('cars array should only contain integer numbers');
            }
            if (currentCarSpot < 1) {
                throw new Error('cars array should only contain integers larger than 0');
            }
            //Check for uniqueness
            if (currentCarSpot === nextCarSpot) {
                throw new Error('cars array must only contain unique occupied spots');
            }
            //Get how many spots a roof has to be to cover k cars
            if (i < (sortedCars.length - k + 1)) {
                //Can only do this, if there are more cars than k left in the array
                let roofLength = sortedCars[i+k-1] - currentCarSpot + 1;
                if (roofLength < n) {
                    n = roofLength;
                }
            }
            //Check to make sure we got answer
            if (n === Number.MAX_SAFE_INTEGER) {
                //Not success, let's throw an error
                throw new Error('Unknown error calculating n');
            }

        }
        return n;
    }
}

module.exports = Cars;