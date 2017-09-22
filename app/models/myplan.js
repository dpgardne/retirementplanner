const mongoose = require('mongoose');

const investmentSchema = mongoose.Schema({
    portfolioType: String,
    largeCap: Number,
    smallCap: Number,
    fixedCap: Number,
    cashCap: Number,
    contribution: Number,
    retirementGoal: Number
});

const Retires = mongoose.model('Retire', investmentSchema);

module.exports = Retires;



//example
//FVoa = PMT [((1 + i)^n - 1) / i]
//pv = 50000 start
// n =  20 * 12  = 240 monthly payments
// 100 payments
// i = .06/12 = .005

//===============
//fv of payments
//===============
//1.005 ^ 240 = 3.310 - 1 = 2.210 / .005 * 100 = 46204
//===============
//fv of lump sum
//===============
// 1 + .005 ^ 240 = 50000 * 1.005 ^ 240 = 165510.22

//===============
//total
//===============
//46204 + 165510.22 = 211714
