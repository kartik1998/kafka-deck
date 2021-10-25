const { Kafka } = require('kafkajs');

global.log = (message) => {
  console.log(`[${new Date().toISOString()}] ${message}`);
};

async function run() {
  try {
    /* create an admin tcp connection */
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['localhost:29092'],
    });

    const admin = kafka.admin();
    log('connecting...');
    await admin.connect();
    log('connected!..');

    /**
     * create "Users" topic with 2 partitions [A - M, N - Z]
     */
    await admin.createTopics({
      topics: [
        {
          topic: 'Users',
          numPartitions: 2,
        },
      ],
    });
    log('"Users" partition created');
    await admin.disconnect();
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
}

run();
