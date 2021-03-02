import express from "express";
import BaseController from "../utils/BaseController";
import {
    carsService
} from "../services/CarsService";

export class CarsController extends BaseController {
    constructor() {
        super("api/cars");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .delete("/:id", this.delete)
            .put("/:id", this.edit);
    }

    async getAll(req, res, next) {
        try {
            res.send({ message: "Data Retrieved", data: await carsService.find(req.query) });
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            res.send({ message: "Data Retrieved", data: await carsService.findById(req.params.id) });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.status(201).send({ message: "Data Created", data: await carsService.create(req.body)}) // 201 for creation
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send({ message: "Data Deleted", data: await carsService.delete(req.params.id)})
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            res.send({ message: "Data Edited", data: await carsService.edit(req.params.id, req.body)})
        } catch (error) {
            next(error);
        }
    }
}