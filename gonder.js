const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
  console.error(error);
});

client.publish("tesla", "uygulama üzerinden gonderildi...", (e, number) => {
  console.log(`Mesaj ${number} kişiye gonderildi`);
});