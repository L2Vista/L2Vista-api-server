1. 컨트렉트 추가하기
   
```
graph add 0xCC737a94FecaeC165AbCf12dED095BB13F037685 --abi=../HyperlaneMockup.json --contract-name=hyperlaneOfficial
graph add 0x073EfC27ad791F735ca1EdF1F9cfe647B8D99aBf --abi=../CCIP.json --contract-name=ccip
```



1. hyperlane & op - the graph
get messgae in first 10, skip 0

```
http://127.0.0.1:3000/hyperlane/optimism/msgin?first=10&skip=0
```

get messgae in first 10, skip 0
```
http://127.0.0.1:3000/hyperlane/optimism/msgout?first=10&skip=10
```

3. hyperlane & op - the graph

get messgae in init 10, skip 0
````
http://127.0.0.1:3000/ccip/optimism/msgin?first=10&skip=0
````

get messgae in init 10, skip 0
````
http://127.0.0.1:3000/ccip/optimism/msgout?first=10&skip=0
````
