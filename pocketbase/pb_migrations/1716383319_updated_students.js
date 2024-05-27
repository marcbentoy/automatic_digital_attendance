/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y07d8bbyneowx25")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_xfElHTL` ON `students` (`rfid`)",
    "CREATE UNIQUE INDEX `idx_iL7UoGn` ON `students` (`schoolId`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fondetyw",
    "name": "schoolId",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y07d8bbyneowx25")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_xfElHTL` ON `students` (`rfid`)"
  ]

  // remove
  collection.schema.removeField("fondetyw")

  return dao.saveCollection(collection)
})
