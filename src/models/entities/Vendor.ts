// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// import { Inventory } from "./Inventory";

// @Entity({ schema: "Hardware_Schema", name: "Vendors" })
// export class Vendor {
//     @PrimaryGeneratedColumn()
//     id!: number;

//     @Column({ type: "varchar", length: 100 })
//     name!: string;

//     @OneToMany(() => Inventory, inventory => inventory.vendor)
//     inventory!: Inventory[];
// }