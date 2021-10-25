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

    const producer = kafka.producer();
    log("connecting...");
    await producer.connect();
    log("connected!..");
    const msg = process.argv.length >= 3 ? process.argv[2] : "John doe";
    const partition = msg.charAt(0).toUpperCase() < "N" ? 0 : 1;
    log(`message=${msg}&partition=${partition}`);
    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: msg,
          partition,
        },
      ],
    });
    log(JSON.stringify(result));
    await producer.disconnect();
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
}

run();
