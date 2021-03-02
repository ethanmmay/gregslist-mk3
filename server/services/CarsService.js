import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class CarsService {

    async find(query = {}) {
        return await dbContext.Cars.find(query)
    }

    async findById(id) {
        let car = await dbContext.Cars.findById(id)
        if (!car) {
            throw new BadRequest("invalid ID")
        }
        return car
    }

    async create(data) {
        return await dbContext.Cars.create(data)
    }

    async delete(id) {
        return await dbContext.Cars.findByIdAndDelete(id)
    }

    async edit(id, data) {
        return await dbContext.Cars.findByIdAndUpdate(id, data, { new: true })
    }

}

export const carsService = new CarsService();