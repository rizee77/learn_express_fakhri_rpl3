const express =require('express')//untuk mengambil suatu fungsi dari modul
const app =express()//memanggil express
const port = 2008//membuat port

app.get('/',function(req,res){//untuk mengirim kedalam web
    res.send('muslam')//untuk mengirim response kedalam web
})

app.listen(port,function () {//untuk membuat server dengan alamat berada di port
    console.log('lam konek dong')//untuk memastikan koneksi
})