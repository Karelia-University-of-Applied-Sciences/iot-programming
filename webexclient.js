// axios for http communication https://webexapis.com/v1/rooms
const axios = require('axios')
const token = 'Bearer ZWM2OTNhYzItMmZkMi00NjY2LWE0ZTMtMTI2MzIwYzljNzc1ZGI5NjkwODMtMTAy_P0A1_a9abfdab-59bd-465e-91ee-a46ce4872278'
const roomsUrl = 'https://webexapis.com/v1/rooms'
const messagesUrl = 'https://webexapis.com/v1/messages'

const myRoomTitle = 'IoT Programming'

let config = {
    headers: {
        'Authorization': token
    }
}

const postMessage = async ( message ) => {
    try {
        let rooms = await axios ( roomsUrl, config )
        let ourroom = rooms.data.items.filter(item => item.title == myRoomTitle)
        let roomId = ourroom[0].id
        message.roomId = roomId
        let result = await axios.post( messagesUrl, message, config )
        console.log("Result: " + JSON.stringify(result.data) )
    } catch (err) {
        console.log(err)
    }
}

let testMessage = { 
    "text": "Hi there",
    "markdown": "This is coming from a script."
}

postMessage( testMessage )
