use admin
db.createUser(
  {
    user: "my_user",
    pwd: "password123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)