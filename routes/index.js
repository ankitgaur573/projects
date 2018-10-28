var express = require('express');
var router = express.Router();
var projects = require('../model/project');

/* GET project page. */
router.get('/', function(req, res, next) {

    /*
    As you can see in project model and projects.json, staff data is in form of array of objects
    Thus we have to use $elemMatch from staff key, to get the ones who have id is 7
     */
    projects.find({ "staff": { $elemMatch: { id: 7 } } }, function (error, response) {
        if(error){
            console.log(error);
        }else{
            console.log(response.length);
            /*
            With map on response below, what I am doing is, converting the array of staff names into a string separated by commas.
            I am doing this so as to show it in the view table.
             */
            response.map(function(singleProject) {
                var staffNames="";
                for(var i = 0; i < singleProject.staff.length; i++){
                    staffNames = staffNames+", "+singleProject.staff[i].name
                }
                singleProject.staffNames = staffNames.replace(/^,|,$/g,''); // trim commas
                return singleProject;
            });
            console.log(response);
        }

    });
});

module.exports = router;