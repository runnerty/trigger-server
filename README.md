# Server Trigger for [Runnerty]

### Configuration sample:

This is a special trigger, since by default runnerty imports it to prevent the use of servers from forcing us to import it (as a npm dependency) in our project. It can also be replaced by a custom tigger server, indicating the "type" of this, which allows us to implement our own logic of "on_request".

```json
{
  "general": {
    "servers": [
      {
        "id": "my_srv_sample",
        "port": 8080,
        "endpoint": "/my_endpoint"
      }
    ]
  },
  "triggers": [
    {
      "id": "server_default",
      "type": "@runnerty-trigger-server"
    }
  ]
}
```

### Plan sample:

```json
{
  "id": "...",
  "name": "...",
  "triggers": [
    {
      "id": "server_default",
      "server": {
        "id": "my_srv_sample",
        "path": "/test",
        "method": "post"
      }
    }
  ]
}
```

### Use:

Both the values that arrive by "query" and those that arrive in "body" will be available in the chain (via customValues).
So if for example we make a "post" like this:

```
curl -X POST -H "Content-Type: application/json" -d '{"MY_VALUE_ONE":"ONE","MY_VALUE_TWO":"2"}' http://localhost:8080/my_endpoint/test
```

We can make use of the values through the "get values" function:

```
 @GV(MY_VALUE_ONE) / @GV(MY_VALUE_TWO) / @GV(my_query_value)
```

[runnerty]: http://www.runnerty.io
