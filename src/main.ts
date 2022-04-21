import {
  getCredentials,
  GameServiceClient,
  StartGameRequest,
  StartGameResponse,
} from "auto-traffic-control";

function main() {
  const gameService = new GameServiceClient("localhost:4747", getCredentials());

  gameService.startGame(new StartGameRequest(), (err) => {
    if (err != null) {
      throw err;
    }

    console.log("Started a new game. Good luck!");
  });
}

main();
