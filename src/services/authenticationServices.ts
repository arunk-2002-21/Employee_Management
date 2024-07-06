import jwt from 'jsonwebtoken';
import Employee from '../models/Employee';
import credentails from '../common/credentails';
import bycrpt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import cookieParser from 'cookie-parser'


export async function employeeLoginAuth(data: any) {
    try{
      const decoded = await jwt.verify(data.token, credentails.jwt.SECRET_KEY)
      return decoded;
    }
    catch(error){
      console.log('Error during log-in employee account', error);
      throw new Error('Login failed');
    }
}