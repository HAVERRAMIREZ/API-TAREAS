const express = require("express")
const routes = express.Router()

routes.get("/", (req , res) =>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT *FROM TAREAS", (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })

}) 


routes.post("/", (req , res) =>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

       conn.query("INSERT INTO  tareas set ?", [req.body],  (err,rows)=>{
            if(err) return res.send(err)

           res.send("tarea agregada")
        })
    })

}) 


routes.delete("/:id", (req , res) =>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

       conn.query("DELETE FROM tareas WHERE id = ?", [req.params.id],  (err,rows)=>{
            if(err) return res.send(err)

           res.send("tarea borrada")
        })
    })

}) 

routes.put("/:id", (req , res) =>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

       conn.query("UPDATE tareas set ?  WHERE id = ?", [req.body, req.params.id],  (err,rows)=>{
            if(err) return res.send(err)

           res.send("tarea modificada")
        })
    })

}) 


module.exports = routes