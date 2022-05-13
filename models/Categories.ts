import { Schema, model } from 'mongoose';

const CategoriesSchema = new Schema({
    title: String,
})

const Category = model('Category', CategoriesSchema)

export default Category
