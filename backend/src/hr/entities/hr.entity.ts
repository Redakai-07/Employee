import { AsstHr } from "src/asst-hr/entities/asst-hr.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hr {

    @PrimaryGeneratedColumn()
    id:number;

    // Email 
    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    email:string;

    // Password
    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    password:string;


    // Connect with Asst HR
    @OneToMany(()=>AsstHr, (asstHr)=>asstHr.hr)
    asstHr:AsstHr

    // ROle
    @Column({
        type:"varchar",
        nullable:false,
        default:"hr"
    })
    role:string;
}
