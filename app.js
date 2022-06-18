const { hyphenToCamel } = require("ejs/lib/utils")
const express =require("express")
const nav=[
    {
        link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/admin',name:' Add Book'}
]

const booksRouter=require("./src/routes/bookRoutes")(nav)
const adminRouter=require("./src/routes/adminRoutes")(nav)

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))
app.set("view engine","ejs")
app.set("views","./src/views")
app.use("/books",booksRouter)
app.use("/admin",adminRouter)


app.get("/",function(req,res){
    res.render("index",
{nav,
    
    title:'Library'
});
});


app.listen(5000)