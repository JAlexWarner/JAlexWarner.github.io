var fs = require('fs');

fs.readFile('html_replacements/reviews.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var obj = JSON.parse(data);

    // console.log(obj);

    for (item in obj) {
        console.log(obj[item].title);
    }
});