import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    device!: string;

    @Column()
    amount!: number;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt!: Date;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    UpdatedAt!: Date;
}