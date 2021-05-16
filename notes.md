### Budowanie obrazu aplikacji

```
docker build -t licencjat .
```

### Budowanie dockera

```
docker build -t licencjat:prod
```

### Uruchamianie dokera

```
docker run -d --name licencjat -p 3000:3000 licencjat:prod
```

### loop strzelajacy do api

```
1..1000 | % {curl http://localhost/stress/ram/15}
```

```
1..1000 | % {curl http://localhost/stress/cpu/35}
```
