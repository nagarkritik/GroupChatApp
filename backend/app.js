require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const sequelize = require('./util/database')

const userRoutes = require('./routes/user')
const gropuRoutes = require('./routes/group')
const messageRoutes = require('./routes/message')

const User = require('./models/user')
const Group = require('./models/group')
const Message = require('./models/message')
const userGroup = require('./models/userGroup')

const app = express()


app.use(cors())
app.use(bodyParser.json())

app.use(userRoutes)
app.use(gropuRoutes)
app.use(messageRoutes)

User.belongsToMany(Group, { through: userGroup });
Group.belongsToMany(User, { through: userGroup });

User.hasMany(Message)
Message.belongsTo(User)

sequelize.sync()
.then((res)=>{
    //console.log(res)
    app.listen(3000)
}).catch(err=>console.log(err))