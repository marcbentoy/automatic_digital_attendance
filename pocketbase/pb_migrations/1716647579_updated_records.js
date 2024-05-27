/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tw6k12h1o4k4lbn")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tw6k12h1o4k4lbn")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
