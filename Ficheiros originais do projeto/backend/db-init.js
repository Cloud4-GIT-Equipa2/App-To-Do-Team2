db.createUser({
  user: "yolo",
  pwd: "bitcoins",
  roles: [ { role: "dbOwner", db: "teste" } ]
})

db.users.insert({
  name: "user"
})