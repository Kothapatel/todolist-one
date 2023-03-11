const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];
var item1 = items;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function(req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindofDay: day, Newlists: items });
});


app.post("/", function(req, res) {

    var item = req.body.ipOne;
    var item = req.body.rename;

    if (item = req.body.ipOne) {
        items.push(item);
    } else {
        item1.pop(item);
    }

    // items.push(item);
    // item1.pop(item);

    res.redirect("/");

});

app.get("/new", function(req, res) {
    res.render("new");
});




// if (currentDay === 6) {
//     day = "saturday";
// } else if (currentDay === 5) {
//     day = "friday";
// } else if (currentDay === 4) {
//     day = "thursday";
// } else if (currentDay === 3) {
//     day = "wednesday";
// } else if (currentDay === 2) {
//     day = "tuesday";
// } else if (currentDay === 1) {
//     day = "monday";
// } else if (currentDay === 0) {
//     day = "sunday";
// } else {
//     day = "error";
// }

// switch (currentDay) {
//     case 0:
//         day = "sunday";
//         break;
//     case 1:
//         day = "monday";
//         break;
//     case 2:
//         day = "tuesday";
//         break;
//     case 2:
//         day = "wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "friday";
//         break;
//     case 6:
//         day = "saturday";
//         break;
// }





app.listen(3000);