const assert = require('assert');
const Solution = require('./solutions');
const solution = new Solution();
const Cars = require('./cars');
const cars = new Cars();

describe('Map', function () {
    it('Should return 11 countries', function (done) {
        assert.equal(solution.solution([
            [5,4,4],
            [4,3,4],
            [3,2,4],
            [2,2,2],
            [3,3,4],
            [1,4,4],
            [4,1,1],
        ]), 11);
        done();
    });

    it('Should return 3 countries', function (done) {
        assert.equal(solution.solution([
            [3,2,4],
            [2,2,2],
        ]), 3);
        done();
    });

    it('Should throw for non-symmetric matrix', function (done) {
        assert.throws(() => {
            solution.solution([
                [5,4,3,2,3,1,4],
                [4,3,2,3,4,1],
                [4,4,4,2,4,4,1]
            ]);
        }, new Error('All elements of the matrix must be defined with same size'));
        done();
    });

})

describe('Parking', function () {
    it('Should throw for non-unique spots', function (done) {
        assert.throws(() => {
            cars.carParkingRoof([6, 2, 2, 7], 3);
        }, new Error('cars array must only contain unique occupied spots'));
        done();
    });

    it('Should throw for non-number spots', function (done) {
        assert.throws(() => {
            cars.carParkingRoof([6, 'x', 12, 7], 3);
        }, new Error('cars array should only contain integer numbers'));
        done();
    });

    it('Should throw for zero k', function (done) {
        assert.throws(() => {
            cars.carParkingRoof([6, 2, 12, 7], 0);
        }, new Error('k must be larger than 0'));
        done();
    });

    it('Should throw for blank list', function (done) {
        assert.throws(() => {
            cars.carParkingRoof([], 1);
        }, new Error('k must be less than the number of cars'));
        done();
    });

    it('Should throw for non list', function (done) {
        assert.throws(() => {
            cars.carParkingRoof('cars', 3);
        }, new Error('cars must be an array'));
        done();
    });

    it('Should throw for k > cars', function (done) {
        assert.throws(() => {
            cars.carParkingRoof([6, 2, 12, 7], 4);
        }, new Error('k must be less than the number of cars'));
        done();
    });

    it('Should calculate correct n for example', function (done) {
        assert.equal(cars.carParkingRoof([6, 2, 12, 7], 3), 6);
        done();
    });

    it('Should calculate correct n for a large example', function (done) {
        assert.equal(cars.carParkingRoof([6, 2, 12, 7, 13, 24, 50, 30, 57], 4), 8);
        done();
    });
})
