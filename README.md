# Game Season API

This is a simple API that returns the current season and progress percentage of a game.

```sh
❯ curl -s -X GET https://game-season-api.kasu.dev/apex/current | jq
{
  "season": {
    "number": 16,
    "name": "Revelry",
    "start": "2023-02-14T17:00:00Z",
    "split": "2023-04-05T17:00:00Z",
    "end": "2023-05-14T17:00:00Z"
  },
  "progress": {
    "split": 1,
    "splitProgress": "9.2",
    "seasonProgress": "5.2"
  }
}
```

### API

https://game-season-api.kasu.dev

### Documentation

https://bump.sh/kasu/doc/game-season-api

### Status Page

https://game-season-api.betteruptime.com/
