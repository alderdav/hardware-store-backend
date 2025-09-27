export const getInventoryQuery = 
    'select i.id, i.item, c.name, v.name , i.price, i.rating, i.picture \
    from hardware_schema.inventory i \
    left join hardware_schema.vendors v on v.id = i.vendor_id \
    left join hardware_schema.categories c on c.id = i.category_id';

export const getSpecificPurchaseDetailsQuery = 
    'select i.item, i.price \
    from hardware_schema.purchases p \
    left join hardware_schema.purchases_inventory_map pim on pim.purchase_id = p.id \
    left join hardware_schema.inventory i on pim.inventory_id = i.id \
    where p.id = $1';

export const getPurchasesByUserQuery = 
    'select p.id, u.first_name, u.last_name, u.email, p.purchase_date \
    from hardware_schema.purchases p \
    left join hardware_schema.purchases_inventory_map pim on pim.purchase_id = p.id \
    left join hardware_schema.purchases_users_map pum on pum.purchase_id = p.id \
    left join hardware_schema.users u on u.id = pum.user_id \
    where u.id = $1';

export const insertUser = 
    'insert into hardware_schema.users(first_name, last_name, email, picture) \
    values($1, $2, $3, $4) RETURNING *';

export const insertPurchase = 
'with new_purchase as ( \
	insert into purchases(user_id, purchase_date) values ($1, current_timestamp) returning id \
), \
purchases_users_map_insert as ( \
	insert into purchases_users_map(user_id, purchase_id) \
	select $1, id from new_purchase \
), \
purchases_inventory_map_insert as ( \
	insert into purchases_inventory_map(purchase_id, inventory_id) \
	select id, 16 from new_purchase \
	union all \
	select id, 5 from new_purchase \
) \
select id from new_purchase;'
