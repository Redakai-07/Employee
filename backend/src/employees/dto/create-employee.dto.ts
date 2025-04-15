import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { IsBoolean, IsEmail, IsNumber, IsOptional, Length, Matches, MaxLength } from "class-validator";


export class CreateEmployeeDto {
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    fName:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    lName:string;

    @MaxLength(30)
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @MaxLength(30)
    @IsEmail()
    @IsNotEmpty()
    @IsOptional()
    altEmail?:string;

    @Length(10,10)
    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits" })
    mobile:string;

    @IsOptional()
    @Length(10,10)
    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits" })
    altMobile?:string;

    @IsOptional()
    @IsBoolean()
    isVerified?:boolean;

    @IsOptional()
    @IsBoolean()
    isSubmitted?:boolean;
}
