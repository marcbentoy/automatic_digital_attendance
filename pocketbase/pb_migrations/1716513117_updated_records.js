/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tw6k12h1o4k4lbn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mwva1ceh",
    "name": "entry",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "in",
        "out"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tw6k12h1o4k4lbn")

  // remove
  collection.schema.removeField("mwva1ceh")

  return dao.saveCollection(collection)
})
