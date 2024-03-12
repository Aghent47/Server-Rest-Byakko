import { Schema, model } from 'mongoose';

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es esquerido'],
    }
});

export const Role = model('Role', RoleSchema);