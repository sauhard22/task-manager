//CRUD - create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient,ObjectID} = require('mongodb')

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=>{
    if(error){
        return console.log('Unable to connect to Database!')
    }
    
    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60b1e72f0cfbce73c8d567c4")
    // }, {
    //     $inc: {
    //         age: 10
    //     } 
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        name: 'SauhaSSrd'
    }).then((error)=>{
        console.log(error)
    })
})