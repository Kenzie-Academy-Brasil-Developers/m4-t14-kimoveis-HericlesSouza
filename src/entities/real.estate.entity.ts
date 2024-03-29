import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedules.users.properties.entity";

@Entity("real_estate")
export class RealEstate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column({ type: "integer" })
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, category => category.realEstate)
    @JoinColumn()
    category?: Category | null | undefined | number;

    @OneToMany(() => Schedule, schedule => schedule.realEstate)
    schedule?: Schedule[] | null | undefined | number;
}