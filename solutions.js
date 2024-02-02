class Solutions {
    solution(A) {
        //Validate input
        if (!Array.isArray(A)) {
            throw new Error('A must be an array');
        }
        if (A.length < 1) {
            throw new Error('A must contain at least one element');
        }
        if (!Array.isArray(A[0])) {
            throw new Error('A must be an array of two dimensions');
        }
        if (A[0].length < 1) {
            throw new Error('A must contain at least one element');
        }
        const height = A.length;
        const width = A[0].length;
        const countedMatrix = Array(width);

        const isSameCountry = function (matrix, countedMatrix, x, y, country) {
            try {
                if (countedMatrix[y][x]) {
                    //Already counted
                    return false;
                }
                if (matrix[y][x] !== country) {
                    //Not same country, exit early
                    return false;
                }
                if (matrix[y][x] === country) {
                    //Same country as caller, mark it as counted so we don't count again
                    countedMatrix[y][x] = true;
                }

                //Same country, continue to check other directions
                if (x < (width - 1)) {
                    isSameCountry(matrix, countedMatrix, x + 1, y, country);
                }
                if (x > 0) {
                    isSameCountry(matrix, countedMatrix, x - 1, y, country);
                }
                //and vertical
                if (y < (height - 1)) {
                    isSameCountry(matrix, countedMatrix, x, y + 1, country);
                }
                if (y > 0) {
                    isSameCountry(matrix, countedMatrix, x, y - 1, country);
                }

                return true;
            }
            catch (e) {
                throw new Error('Error in checkCountryCell: ' + e.message);
            }
        }

        //Init countedMatrix to keep track of a cel being marked as a country
        for (let i = 0; i < height; i++) {
            countedMatrix[i] = Array(width);
        }

        let countries = 0;
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                //Get element
                if (A[y].length !== width) {
                    throw new Error('All elements of the matrix must be defined with same size');
                }
                if (isSameCountry(A, countedMatrix, x, y, A[y][x])) {
                    countries++;
                }
            }
        }
        return countries;
    }
}

module.exports = Solutions;