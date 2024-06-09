import { ZIM } from "zego-zim-web";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import axiosInstance from "./axios";

let zego;
const appID = 718435135;

async function FetchToken(user_id) {
  // You can await here
  const response = await axiosInstance.post("/user/generate-zego-token", {
    userId: user_id,
    room_id: "roomID",
  });
  console.log(response, "TOKEN RESPONSE");
  return response.data.token;
  // ...
}
// connecting to socket io server from backend
const connectZego = (user_id, userName) => {
  FetchToken(user_id).then((token) => {
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      appID, // You need to replace the appid with your own appid
      token,
      null,
      user_id,
      userName
    );
    zego = ZegoUIKitPrebuilt.create(KitToken);
    // add plugin
    zego.addPlugins({ ZIM });
  });
};

export { zego, connectZego };
