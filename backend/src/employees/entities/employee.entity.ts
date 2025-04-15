import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id:number;

    // First Name
    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    fName:string;

    // Last Name
    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    lName:string;

    // Email
    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    email:string;


    // Alternate Email
    @Column({
        type:"varchar",
        length:30,
        nullable:true
    })
    altEmail:string;

    // Mobile
    @Column({
        type:"varchar",
        nullable:false
    })
    mobile:string;


    // Alternate Mobile number
    @Column({
        type:"varchar",
        nullable:true
    })
    altMobile:string;


    // isVerified
    @Column({
        type:"boolean",
        default:false
    })
    isVerified:boolean;

    // IsSubmitted
    @Column({
        type:"boolean",
        default:false
    })
    isSubmitted:boolean

    // role
    @Column({
        type:"varchar",
        nullable:false,
        default:"employee"
    })
    role:string;
}
