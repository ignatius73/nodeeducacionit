import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.mp5d6.mongodb.net/educacionit?retryWrites=true&w=majority`;

const dbConnection = async()=>{
   try {
      await mongoose.connect(uri)
      console.log("Base de datos Conectada");
   } catch (error) {
       throw new Error(error)
   } 
}

export default dbConnection