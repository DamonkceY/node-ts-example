import {Request, Response} from "express";
import {NativeError} from 'mongoose'
import Categories from "./models/Categories";
// import {ResponseCodeEnum, ResponseHandler, ResponseStatusEnum} from "./util/responseHandler";
// import {AuthMiddleware} from "./util/authMiddleware";

const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 3030;

mongoose.connect('mongodb://127.0.0.1/qsd', {useNewUrlParser: true, useUnifiedTopology: true}, (e: NativeError | null) => {
    console.log(e)
});

mongoose.connection.on('error', () => console.log('database error connection'));

app.get('/', (req: Request, res: Response) => {
    // AuthMiddleware(req, res).then(() => {
    //     ResponseHandler(res, 'Passed', ResponseStatusEnum.success, ResponseCodeEnum.success)
    // }).catch(() => {
    //     console.log('Failed')
    // })
    const category = new Categories({
        title: 'test',
    })
    category.save()
    res.send(category)
})


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
