import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateManagerDto {

    @IsEmail()
    @IsNotEmpty()
    email:string;
    
    @IsString()
    @IsNotEmpty()
    password:string;
}
