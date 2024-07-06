import * as dotenv from 'dotenv';
dotenv.config();


const credentails ={
    postgres:{
        USERNAME : process.env.USER || "",
        DATABASE : process.env.DATABASE || "",
        HOST  : process.env.HOST_NAME || "",
        PASSWORD : process.env.PASSWORD || "",
        DBPORT : Number(process.env.PORTNAME) || 5432,
       },
    jwt:{
        SECRET_KEY: process.env.SECRET_KEY || ""
    }
}

export default credentails;