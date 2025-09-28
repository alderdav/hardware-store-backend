import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Purchase } from "./Purchase";
import { Inventory } from "./Inventory";

@Entity({ schema: "Hardware_Schema", name: "Purchases_Inventory_Map" })
export class PurchasesInventoryMap {
    @PrimaryColumn()
    purchase_id!: number;

    @PrimaryColumn()
    inventory_id!: number;

    @ManyToOne(() => Purchase, purchase => purchase.purchasesInventoryMap)
    @JoinColumn({ name: "purchase_id" })
    purchase!: Purchase;

    @ManyToOne(() => Inventory, inventory => inventory.purchasesInventoryMap)
    @JoinColumn({ name: "inventory_id" })
    inventory!: Inventory;
}