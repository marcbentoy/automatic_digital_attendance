/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y07d8bbyneowx25")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y07d8bbyneowx25")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
