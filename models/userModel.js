import mongoose from 'mongoose';
import userSchema from '@/schemas/userSchema';

const UserModel = mongoose.models.user || mongoose.model('user', userSchema);

export default UserModel;
