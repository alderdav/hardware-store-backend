// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// import { Purchase } from "./Purchase";
// import { PurchasesUsersMap } from "./PurchasesUserMap";

// @Entity({ schema: "Hardware_Schema", name: "Users" })
// export class User {
//     @PrimaryGeneratedColumn()
//     id!: number;

//     @Column({ type: "varchar", length: 100 })
//     first_name!: string;

//     @Column({ type: "varchar", length: 100 })
//     last_name!: string;

//     @Column({ type: "varchar", length: 100 })
//     email!: string;

//     @Column({ type: "varchar", length: 255, nullable: true })
//     picture!: string;

//     @OneToMany(() => Purchase, purchase => purchase.user)
//     purchases!: Purchase[];

//     @OneToMany(() => PurchasesUsersMap, pu => pu.user)
//     purchasesUsersMap!: PurchasesUsersMap[];
// }