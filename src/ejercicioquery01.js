
// Consultas
    db.pantallas.find( {} );
/*{ "_id" : ObjectId("5f99b6f01a0cec49f96f6546"), "item" : "Keep Out XGM27V3 27", "qty" : 35, "size" : { "h" : 10, "w" : 18, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f99b6f01a0cec49f96f6547"), "item" : "AOC 24B1H 23.6", "qty" : 70, "size" : { "h" : 5.5, "w" : 6, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f99b6f01a0cec49f96f6548"), "item" : "Toshiba 58UA3A63DG 4K UHD 58", "qty" : 130, "size" : { "h" : 5.5, "w" : 10, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f99b6f01a0cec49f96f6549"), "item" : "TV LED 32 - OK ODL 32661HN, HD, TDT2, Dolby Audio", "qty" : 86, "size" : { "h" : 28.85, "w" : 27, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f99b6f01a0cec49f96f654a"), "item" : "Toshiba 43UL3063DG 4K UHD 43", "qty" : 96, "size" : { "h" : 5, "w" : 19.25, "uom" : "cm" }, "status" : "D" }*/

//se le aplican unos ciertos filtros al objeto que deseamos buscar, especificando que quiero buscar los objetos status= "A"
db.pantallas.find( { status: "A" } )
/*{ "_id" : ObjectId("5f99b5e90730f58f32d3284b"), "item" : "AOC 24B1H 23.6", "qty" : 70, "size" : { "h" : 5.5, "w" : 6, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f99b5e90730f58f32d3284d"), "item" : "TV LED 32 - OK ODL 32661HN, HD, TDT2, Dolby Audio", "qty" : 86, "size" : { "h" : 28.85, "w" : 27, "uom" : "cm" }, "status" : "A" }*/


//aqui especificamos el valor exacto de $eq=130 y el tipo de status de el objeto que es "D" para realizar una busqueda de un objeto
db.pantallas.find ( { status: "D", qty: { $eq: 130 } } )
/*{ "_id" : ObjectId("5f99b5e90730f58f32d3284c"), "item" : "Toshiba 58UA3A63DG 4K UHD 58", "qty" : 130, "size" : { "h" : 5.5, "w" : 10, "uom" : "in" }, "status" : "D" }*/

//Buscaremos un objeto con un valor mayor a el indicado
db.pantallas.find( { status: "A", qty: { $gte: 71 } } )

/*{ "_id" : ObjectId("5f99b5e90730f58f32d3284d"), "item" : "TV LED 32 - OK ODL 32661HN, HD, TDT2, Dolby Audio", "qty" : 86, "size" : { "h" : 28.85, "w" : 27, "uom" : "cm" }, "status" : "A" } */ 

// Usamos un or pararealzar una busqueda de un objeto que cumpla 1 de los 2  requisitos puestos
db.pantallas.find( { $or: [{ status: "D" }, {uom:"in"} ] })
/*{ "_id" : ObjectId("5f99b5e90730f58f32d3284a"), "item" : "Keep Out XGM27V3 27", "qty" : 35, "size" : { "h" : 10, "w" : 18, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f99b5e90730f58f32d3284c"), "item" : "Toshiba 58UA3A63DG 4K UHD 58", "qty" : 130, "size" : { "h" : 5.5, "w" : 10, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f99b5e90730f58f32d3284e"), "item" : "Toshiba 43UL3063DG 4K UHD 43", "qty" : 96, "size" : { "h" : 5, "w" : 19.25, "uom" : "cm" }, "status" : "D" }*/ 

//Usamos el and para buscar un valor que cumpla los 2 requisitos
db.pantallas.find( { $and: [{status:{ $eq:"A"}},{ qty:{$gte:65 }}] })
/*{ "_id" : ObjectId("5f99b5e90730f58f32d3284b"), "item" : "AOC 24B1H 23.6", "qty" : 70, "size" : { "h" : 5.5, "w" : 6, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f99b5e90730f58f32d3284d"), "item" : "TV LED 32 - OK ODL 32661HN, HD, TDT2, Dolby Audio", "qty" : 86, "size" : { "h" : 28.85, "w" : 27, "uom" : "cm" }, "status" : "A" }*/

//Por ultimo usaré un $and implícito
db.inventory.find( { status:"A",  qty:70 } )
/*{ "_id" : ObjectId("5f99b163e4f85f69c2688baa"), "item" : "notebook", "qty" : 70, "size" : { "h" : 5.5, "w" : 6, "uom" : "in" }, "status" : "A" }*/

