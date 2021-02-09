const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
    console.error(error);
});

//SET
/*
client.set("name","serhat", (error, replay) => {
    if (error) {
        console.error(error);
    }
    console.log("Replay", replay);
});
*/
//GET
/*
client.get("name", (error, replay) => {
    if (error) {
        console.error(error);
    }
    console.log("Replay", replay);
});
*/
//DEL
/*
client.del("name", (error, replay) => {
    if (error) {
        console.error(error);
    }
    console.log("Replay", replay);
});
*/
//EXISTS (var yok kontrol)
/*
client.exists("name", (error, replay) => {
    if (error) {
        console.error(error);
    }
    console.log("Replay", replay);
});
*/
//APPEND
/*
client.append("last_name", "serhat", (error, replay) => {
    if (error) {
        console.error(error);
    }
    console.log("Replay", replay);
    client.get("name", (error, replay) => {
        console.log(replay);
    });
});
*/
client.on("message", (channel,message) => {
    console.log(`Kanal : ${channel} Mesaj : ${message}`);
});

client.subscribe("tesla");


