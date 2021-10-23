const { Kafka } = require("kafkajs");

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });
    const admin = kafka.admin();
    console.log(`connecting to kafka..`);
    await admin.connect();
    console.log(`connected to kafka!`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

run();
