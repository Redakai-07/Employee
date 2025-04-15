import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCeoDto {
        @IsEmail()
        @MaxLength(30)
        @IsNotEmpty()
        email:string;
    
        @IsString()
        @IsNotEmpty()
        @MaxLength(30)
        password:string;
}
