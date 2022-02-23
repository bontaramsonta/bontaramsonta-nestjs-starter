// to initialize default replica-set configuration and enable db change streams
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    // { _id: 0, host: "mongohost:27017" },
    // add more to make it a cluster
  ]
})