import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { PurchasesUsersMap } from "./PurchasesUserMap";
import { PurchasesInventoryMap } from "./PurchasesInventoryMap";

@Entity({ schema: "Hardware_Schema", name: "Purchases" })
export class Purchase {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.purchases, { nullable: false })
    user!: User;

    @Column({ type: "timestamp" })
    purchase_date!: Date;

    @OneToMany(() => PurchasesUsersMap, pu => pu.purchase)
    purchasesUsersMap!: PurchasesUsersMap[];

    @OneToMany(() => PurchasesInventoryMap, pim => pim.purchase)
    purchasesInventoryMap!: PurchasesInventoryMap[];
}