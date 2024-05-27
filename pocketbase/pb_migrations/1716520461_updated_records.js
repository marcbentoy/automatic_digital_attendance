/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tw6k12h1o4k4lbn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jizwysye",
    "name": "entryDate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tw6k12h1o4k4lbn")

  // remove
  collection.schema.removeField("jizwysye")

  return dao.saveCollection(collection)
})
