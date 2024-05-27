/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y07d8bbyneowx25")

  // remove
  collection.schema.removeField("gpy81zdb")

  // remove
  collection.schema.removeField("nqdjlisf")

  // remove
  collection.schema.removeField("1zpjqgng")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d2cr7ogv",
    "name": "college",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "CEAS",
        "COT",
        "COE",
        "CME"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xg1ufg73",
    "name": "section",
    "type": "text",
    "required": false,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gpy81zdb",
    "name": "middleName",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nqdjlisf",
    "name": "lastName",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1zpjqgng",
    "name": "distinction",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "student",
        "instructor",
        "admin"
      ]
    }
  }))

  // remove
  collection.schema.removeField("d2cr7ogv")

  // remove
  collection.schema.removeField("xg1ufg73")

  return dao.saveCollection(collection)
})
