import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UsuarioSchema = new Schema({
  first_name:{
      type:String,
      required:[true, 'El nombre es obligatorio']  
  },
  last_name:{
    type:String,
    required:[true, 'El apellido es obligatorio']
  },
  age:{
      type:Number,
      min:[18, 'Debes ser mayor de edad']     
  }
    
})

export default mongoose.model('Usuario', UsuarioSchema )


/* {
    "first": "GABRIEL",
    "last": "GARCIA",
    "age": "42",
    "avatar": "undefined",
    "user": "gabo",
    "password": "1234",
    "id": "8314f43a-bf85-4958-98dc-5b5ad9eec581"
  } */