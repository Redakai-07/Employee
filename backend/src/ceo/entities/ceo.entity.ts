import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ceo {
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


        @Column({
            type:"varchar",
            nullable:false,
            default:"ceo"
        })
        role:string;
}
