module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0){
        callback(new Error("Values should be greater than 0"),null);
    }
    else{
        callback(null,
        {
            perimeter: () => ((x+y)*2),
            area: () => (x*y)
        })
    }
}



/*
exports.perimeter = (x,y) => ((x+y)*2);
exports.area = (x,y) => (x*y);
*/