import Employee from '../models/Employee';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export async function createNewEmployee(data: any) {
    try{
        const newPassword = await bcrypt.hash(data.password, 10)
        const newEmployee = await Employee.create({
            id: uuidv4(),
            name: data.name,
            email: data.email,
            password: newPassword,
            assignedShiftHours: data.assignedShiftHours,
            role: data.role
        })
        return newEmployee;
    }catch(error){
        console.log('error occured during creating new Employee account:', error);
    }
}