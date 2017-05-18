var express = require("express");
var apiRouter = express.Router();
var mongoose = require("mongoose");
var CvSchema = require("../model/cv");

apiRouter.get("/", function(req, res) {
    CvSchema.find({}, function(err, data) {
        if(err) {
            res.status(500).send({err: err});
        }else {
            res.status(200).send({message: "Success", data: data})
        }
    })
})

apiRouter.post("/", function(req, res) {
    var newCv = new CvSchema(req.body);
    newCv.save(function(err, data) {
        if(err) {
            res.status(500).send({err: err});
        }else {
            res.status(200).send({message: "you have added a new record", data: data})
        }
    })
})

apiRouter.delete("/:id", function(req, res) {
    var id = req.params.id;
    CvSchema.findById(id, function(err, data){
        if(err) {
            res.status(500).send({err: err});
        }else {
            data.remove(function(err, result) {
                if(err) {
                    res.status(500).send({err: err});
                }else {
                    res.status(200).send({message: "You have delete the record", data: result})
                }
            })
        }
    })
})

apiRouter.put("/:id", function(req, res) {
    var id = req.params.id;
    CvSchema.findById(id, function(err, data){
        if(err) {
            res.status(500).send({err: err});
        }else {
            for(key in req.query) {
                data[key] = req.query[key];
            }
            data.save(function(err, result) {
                if(err) {
                    res.status(500).send({err: err});
                }else {
                    res.status(200).send({message: "You have updated the record", data: result})
                }
            })
        }
    })
})

module.exports = apiRouter;