import Category from "@/models/Category";
import mongoose from "mongoose"
const connect = async () =>{
  try {
    console.log(process.env.MONGO);
    await mongoose.connect(process.env.MONGO)  
    const data = {name: "Test"};
    const category = new Category(data);
    await category.save();

    



  } catch (error) {
    console.log(error);
    throw new Error("Connection failed");
  }
}

export default connect;