import mongoose from "mongoose";


const crudSchema = new mongoose.Schema({
	tittle:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	date:{
       type:Date,
       default:Date.now
	},
	user:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
	}
},{
	timestamps:true
})

export default mongoose.model("crud",crudSchema)