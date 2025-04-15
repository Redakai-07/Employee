import { AsstHr } from "src/asst-hr/entities/asst-hr.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {

    // ID
    @PrimaryGeneratedColumn()
    id:number
    
    // Email
    @Column({
        type:"varchar",
        nullable:false,
    })
    email:string;

    // Password
    @Column({
        type:"varchar",
        nullable:false,
    })
    password:string;


    // Join with assistant HR
    @OneToOne(() => AsstHr, (asstHr) => asstHr.manager)
    @JoinColumn()
    asstHr: AsstHr;

    // role
    @Column({
        type:"varchar",
        nullable:false,
        default:"manager"
    })
    role:string;
}
