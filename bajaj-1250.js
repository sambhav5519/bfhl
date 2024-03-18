const express =require('express');
const app= express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.use(cors());
app.post('/bfhl',(req,res)=>{
    try{
    const data =req.body.data;
    const response = {
        is_success : true,
        user_id :"sambhav_sharma_06012004",
        email:"sambhav1250.be21@chitkara.edu.in",
        roll_number:"2110991250",
        even :data.filter(num=>num%2===0),
        odd :data.filter(num=>num%2!==0),
        alpha : data.filter(val =>typeof val==='string').map(val=>val.toUpperCase()),


    }
    res.json(response);
    console.log(response);
}
    catch(error){
        console.log(error);
        res.status(500).json({is_success : false,
        message:"Error encountered"
        })


    }
})
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})