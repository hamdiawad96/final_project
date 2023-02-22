 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'



import Brand from 'App/Models/Brand';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BrandsController {

    public async getAll(ctx: HttpContextContract) {
        var result = await Brand.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var result = await Brand.findOrFail(id);
        return result;
    }
}