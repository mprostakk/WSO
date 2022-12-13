# WSO

Simple code execution system with tasks and submissions

## How to start

`docker-compose up --build`

## Installing language on Piston
```
POST localhost:9000/api/v2/packages

{
    "language": "python",
    "version": "3.9.4"
}
```

## Example execute request to Piston
```
POST localhost:9000/api/v2/execute

{
    "language": "python",
    "version": "3.9.4",
    "files": [
        {
            "name": "cool.py",
            "content": "print(\"Hello world\")"
        }
    ],
    "stdin": "",
    "args": [],
    "compile_timeout": 10000,
    "run_timeout": 3000,
    "compile_memory_limit": -1,
    "run_memory_limit": -1
}
```

## Technologies
- Piston `https://github.com/engineer-man/piston`
- Piston node client `https://github.com/dthree/node-piston`
