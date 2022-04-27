const express =require("express")  
const mongoose =require("mongoose") 
const exphbs=require("express-handlebars")
const { Console } = require("console")

const app = express()  
const PORT=3000

const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs' 
})
app.engine('hbs',hbs.engine)  
app.set('view engine','hbs')
app.set('views','views')

app.use(express.urlencoded({extended:true}))
app.use(express.static(''))
const conn= 'mongodb+srv://furkannyldrmm:<fy244987>@cluster0.iiyjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
async function start () {
 try{
     await mongoose.connect(conn,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    app.listen(PORT,()=> console.log("Server has been started"))
   
     }
     catch{
        (console.error())
     }

}
start()