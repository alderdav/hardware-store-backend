import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Inventory } from "./Inventory";

@Entity({ schema: "hardware_schema", name: "categories" })
export class Category {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100 })
    name!: string;

    @OneToMany(() => Inventory, inventory => inventory.category)
    inventory!: Inventory[];
}