const mongoose= require("mongoose");


const userDataSchema= new mongoose.Schema(

    {
        userName:{
            type:String,
            unique:true,
            require:true
        },

        email:{
            type:String,
            unique:true,
            require:true,
        },

        password:{
           type:String,
           unique:false,
           require:true,
        }
    },
    {timestamps:true},
)

userDataSchema.index({ userName: 1 });


const userData= mongoose.model("userData",userDataSchema);

module.exports=userData;    