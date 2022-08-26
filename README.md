# 🧑‍✈️ Traffic Controller

_A bot for the video game [Auto Traffic Control] – written in [TypeScript]._

## Code of Conduct

👋 This is a welcoming and inclusive project. Be nice and follow our
[code of conduct](./CODE_OF_CONDUCT.md).

## Docker

To run this project with Docker, first build the container:

```bash
docker build -t atc-client .
```

Until [jdno/auto-traffic-control#171](https://github.com/jdno/auto-traffic-control/discussions/171) is resolved, you have to run the server natively in the background and run the container with the [host network](https://docs.docker.com/network/host/) to allow it to query the server:

```bash
(cd /location/of/auto-traffic-control && ./auto-traffic-control)& docker run --rm -it --network=host atc-client
```


## License

This project is released under the terms of the [MIT License](./LICENSE).

[auto traffic control]: https://auto-traffic-control.com
[typescript]: https://www.typescriptlang.org/
