import { Hr } from "src/hr/entities/hr.entity";
import { Manager } from "src/manager/entities/manager.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AsstHr {

    // ID
    @PrimaryGeneratedColumn()
    id:number;

    // Email
    @Column({
        type:"varchar",
        length:30
    })
    email:string;

    // Password
    @Column({
        type:"varchar",
        length:30
    })
    password:string;

    // Join With HR
    @ManyToOne(()=>Hr, (hr)=>hr.asstHr)
    @JoinColumn({})
    hr:Hr


    // Join with Manager
    @OneToOne(() => Manager, (manager) => manager.asstHr)
    manager: Manager;

    @Column({
        type:"varchar",
        nullable:false,
        default:"asstHr"
    })
    role:string;
}
