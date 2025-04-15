import { IsEmail } from "@nestjs/class-validator";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateHrDto {

    @IsEmail()
    @MaxLength(30)
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    password:string;


    
    
}
