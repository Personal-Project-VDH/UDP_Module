declare module "module_udp" {
  class UDP_SERVER {
    constructor();

    server: any;

    restartBoardCast(): void;
    createBoardCast(): void;
    closeBoardCast(): void;
    boardCastData(data: Object): void;
  }
}
