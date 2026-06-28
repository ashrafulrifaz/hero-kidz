'use server'

import { collections, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export const getProduct = async () => {
    const products = await dbConnect(collections.PRODUCTS).find().toArray()
    return products;
}

export const singleProducts = async (id) => {
    if(id.length != 24) {
        return {}
    }

    const query = {_id: new ObjectId(id)}

    const product = await dbConnect(collections.PRODUCTS).findOne(query)

    return product || {}
}