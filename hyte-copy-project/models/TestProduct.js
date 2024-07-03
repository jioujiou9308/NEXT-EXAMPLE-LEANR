import mongoose from 'mongoose';

const TestProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    name: {
        type: String,
        required: true,
        maxlength: 60
    }
})


export default mongoose.models.TestProduct || mongoose.model('TestProduct', TestProductSchema)