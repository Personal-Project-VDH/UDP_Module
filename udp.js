import dgram from "react-native-udp";
import { Buffer } from "buffer";

const LOCAL_PORT = xxxxx; // port to boardcast
const MODULE_IP = "255.255.255.255";

export class UDP_SERVER {
  constructor() {
    this.server = dgram.createSocket({ type: "udp4" });
  }

  restartBoardCast() {
    try {
      this.server = dgram.createSocket({ type: "udp4" });
      this.createBoardCast();
    } catch (error) {
      console.log(error, "reconnect");
    }
  }

  createBoardCast() {
    this.server.bind(LOCAL_PORT);
  }

  closeBoardCast() {
    this.server.close();
  }

  boardCastData(data) {
    let message = Buffer.from(JSON.stringify(data));
    try {
      this.server.send(
        message,
        0,
        message.length,
        LOCAL_PORT,
        MODULE_IP,
        (err) => {
          if (err) {
            console.log(err, "send err");
            return;
          }
        }
      );
    } catch (error) {}
  }
}
