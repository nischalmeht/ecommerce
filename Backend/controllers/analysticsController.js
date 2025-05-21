const Order = require("../models/order-model");
const Product = require("../models/product-model");
const User = require("../models/user-model");

function getDatesRange(startDate,endDate){
    const dates = [];
    let currentDate = new Date(startDate);
    while(currentDate <= endDate){
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}
