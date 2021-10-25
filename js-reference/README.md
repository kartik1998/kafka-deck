## Kafka Node Reference

- To setup first run `docker-compose up` in the root directory
- To create the users topic first run: `node topic.js`
  - Sample output:

```
[2021-10-25T17:36:07.561Z] connecting...
[2021-10-25T17:36:07.606Z] connected!..
[2021-10-25T17:36:07.635Z] "Users" partition created
```


- To produce to the users topic first run: `node producer.js <name>`
  - `node producer.js ziya` (This will write to partition 1)
  - Sample output:

```
[2021-10-25T17:36:07.561Z] connecting...
[2021-10-25T17:36:07.606Z] connected!..
[2021-10-25T18:00:59.173Z] message=ziya&partition=1
[2021-10-25T18:03:13.318Z] [{"topicName":"Users","partition":1,"errorCode":0,"baseOffset":"0","logAppendTime":"-1","logStartOffset":"0"}]
```
- To consume run: `node consumer.js`
  - Sample log: 

```
[2021-10-25T18:15:30.296Z] connecting...
[2021-10-25T18:15:30.338Z] connected!..
{"level":"INFO","timestamp":"2021-10-25T18:15:36.485Z","logger":"kafkajs","message":"[ConsumerGroup] Consumer has joined the group","groupId":"test","memberId":"myapp-233d6e5b-d700-4618-8e3e-9ada35c3aa79","leaderId":"myapp-233d6e5b-d700-4618-8e3e-9ada35c3aa79","isLeader":true,"memberAssignment":{"Users":[0,1]},"groupProtocol":"RoundRobinAssigner","duration":6136}
Recieved message: John doe on partition 0
Recieved message: ziya on partition 1
Recieved message: zone on partition 1
```