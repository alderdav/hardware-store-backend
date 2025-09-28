import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { Purchase } from "./Purchase";

@Entity({ schema: "hardware_Schema", name: "purchases_users_map" })
export class PurchasesUsersMap {
    @PrimaryColumn()
    user_id!: number;

    @PrimaryColumn()
    purchase_id!: number;

    @ManyToOne(() => User, user => user.purchasesUsersMap)
    @JoinColumn({ name: "user_id" })
    user!: User;

    @ManyToOne(() => Purchase, purchase => purchase.purchasesUsersMap)
    @JoinColumn({ name: "purchase_id" })
    purchase!: Purchase;
}