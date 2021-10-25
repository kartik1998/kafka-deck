const { Kafka } = require("kafkajs");

global.log = (message) => {
  console.log(`[${new Date().toISOString()}] ${message}`);
};

async function run() {
  try {
    /* create an admin tcp connection */
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:29092"],
    });

    const consumer = kafka.consumer({
      groupId: "test",
    });
    log("connecting...");
    await consumer.connect();
    log("connected!..");

    await consumer.subscribe({
      topic: "Users",
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Recieved message: ${result.message.value} on partition ${result.partition}`
        );
      },
    });
  } catch (err) {
    console.error(err);
  } finally {
    // process.exit(0);
  }
}

run();
