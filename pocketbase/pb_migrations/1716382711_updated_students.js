/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y07d8bbyneowx25")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_xfElHTL` ON `students` (`rfid`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y07d8bbyneowx25")

  collection.indexes = []

  return dao.saveCollection(collection)
})
