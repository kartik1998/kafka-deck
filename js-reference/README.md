## Kafka Node Reference

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