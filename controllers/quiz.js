const db = require("../models");
const Quiz = db.quizzes;

//Membuat Data
exports.create = async (req, res) =>{
    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "kuis berhasil ditambahkan",
            data: data,
        })
    }catch (error){
        res.status(500).json({
            message:error.message,
            data: null
        });
    }
}

//Mendapatkan Semua Data
exports.getAll = async (req
    , res) =>{
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "kuis berhasil didapatkan",
            data: quizzes,
        });
    }catch (error){
        res.status(500).json({
            message:error.message,
            data: null
        });
    }
}

//Mengupdate Data
exports.update = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:true})
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: `Data dengan id ${id} berhasil diubah`,
            data: quiz,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

//Menghapus Data
exports.delete = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:true })
        quiz.destroy()
        res.json({
            message: "kuis berhasil dihapus",
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

//Mendapatkan Data Berdasarkan ID
exports.findOne = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:ture})
        res.json({
            message: `kuis berhasil ditampilkan dengan id ${id}`,
            data: quiz,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

//Mendapatkan Data Category ID
exports.getByCategoryId = async (req, res) =>{
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
        res.json({
            message: `kuis berhasil ditampilkan dengan id ${id}`,
            data: quizzes,
        });

}

//Mendapatkan Data Level ID
exports.getByLevelId = async (req, res) =>{
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
        res.json({
            message: `kuis berhasil ditampilkan dengan id ${id}`,
            data: quizzes,
        });

}