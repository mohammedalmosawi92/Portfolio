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

apiRouter.put("/:id/:prop", function(req, res) {
    var id = req.params.id;
    CvSchema.findById(id, function(err, data) {
        if(err) {
            res.status(500).send({err: err});
        }else {
            var prop = req.params.prop;
            data[prop] = undefined;
            data.save(function(err, result) {
                if(err) {
                    res.status(500).send({err: err});
                }else {
                    res.status(200).send({msg: "You have deleted a property", data: result})
                }
            })
        }
    })
})

apiRouter.put("/:id", function(req, res) {
    var id = req.params.id;
    CvSchema.findByIdAndUpdate(id, req.body,function(err, data){
        if(err) {
            res.status(500).send({err: err});
        }else {
            res.status(200).send({msg: "You have updated an item", data: data})
        }
    })
})

module.exports = apiRouter;
