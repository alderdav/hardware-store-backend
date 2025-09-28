// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
// import { Category } from "./Category";
// import { Vendor } from "./Vendor";
// import { PurchasesInventoryMap } from "./PurchasesInventoryMap";

// @Entity({ schema: "Hardware_Schema", name: "Inventory" })
// export class Inventory {
//     @PrimaryGeneratedColumn()
//     id!: number;

//     @Column({ type: "varchar", length: 255 })
//     item!: string;

//     @ManyToOne(() => Category, category => category.inventory, { nullable: false })
//     category!: Category;

//     @ManyToOne(() => Vendor, vendor => vendor.inventory, { nullable: false })
//     vendor!: Vendor;

//     @Column({ type: "decimal", precision: 10, scale: 2 })
//     price!: number;

//     @Column({ type: "decimal", precision: 2, scale: 1, nullable: true })
//     rating!: number;

//     @Column({ type: "varchar", length: 255, nullable: true })
//     picture!: string;

//     @OneToMany(() => PurchasesInventoryMap, pim => pim.inventory)
//     purchasesInventoryMap!: PurchasesInventoryMap[];
// }