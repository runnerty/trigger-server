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
#### You can use two different authentication strategies, basic auth or API Key.
Basic Auth (standard):
```json
{
  "general": {
    "servers": [
      {
        "id": "my_srv_sample",
        "port": 8080,
        "endpoint": "/my_endpoint",
        "users":[
            {"user":"user_one", "password":"pass_one"},
            {"user":"user_two", "password":"pass_two"}
          ]
      }
    ]
  }
}
```
API Key. You can send your API-Key in the endpoint call using the `api_key` query parameter or the `x-api-key` header.
```json
{
  "general": {
    "servers": [
      {
        "id": "my_srv_sample",
        "port": 8080,
        "endpoint": "/my_endpoint",
        "apikey": "_API_KEY_SAMPLE_"
      }
    ]
  }
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

#### Usage

Both the values that arrive by "query" and those that arrive in "body" will be available in the chain (via customValues).
So if for example we make a "post" like this:

```
curl -X POST -H "Content-Type: application/json" -d '{"MY_VALUE_ONE":"ONE","MY_VALUE_TWO":"2"}' http://localhost:8080/my_endpoint/test
```
We can make use of the values through the "get values" function:

```
 @GV(MY_VALUE_ONE) / @GV(MY_VALUE_TWO) / @GV(my_query_value)
```

Examples of `api-key` authentication:

```
curl -X POST -H "Content-Type: application/json" -H "x-api-key: _API_KEY_SAMPLE_" http://localhost:8080/my_endpoint/test
```

```
curl -X POST -H 'Content-Type: application/json' 'localhost:8080/my_endpoint/test?api_key=_API_KEY_SAMPLE_'
```

[runnerty]: http://www.runnerty.io
