import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateAsstHrDto {
    
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

}
