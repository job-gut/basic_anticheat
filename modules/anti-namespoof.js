"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const functions_1 = require("../functions");
const launcher_1 = require("bdsx/launcher");
event_1.events.packetBefore(1).on((pkt, ni) => {
    const req = pkt.connreq;
    if (!req)
        return;
    const cert = req.getCertificate();
    if (!cert)
        return;
    const realname = cert.getId();
    const namefromjson = req.getJsonValue().ThirdPartyName;
    if (realname !== namefromjson) {
        launcher_1.bedrockServer.serverInstance.disconnectClient(ni);
        (0, functions_1.TestFailed)(ni, "Name Spoof");
    }
    ;
    if (namefromjson.length > 20) {
        launcher_1.bedrockServer.serverInstance.disconnectClient(ni);
        (0, functions_1.TestFailed)(ni, "Too long name");
    }
    ;
    if (namefromjson.length < 1) {
        launcher_1.bedrockServer.serverInstance.disconnectClient(ni);
        (0, functions_1.TestFailed)(ni, "no name");
    }
    ;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aS1uYW1lc3Bvb2YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnRpLW5hbWVzcG9vZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyw0Q0FBMEM7QUFDMUMsNENBQThDO0FBQzlDLGNBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBQyxFQUFFO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDeEIsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPO0lBRWpCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsQyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUcsQ0FBQyxjQUFjLENBQUM7SUFFeEQsSUFBSSxRQUFRLEtBQUssWUFBWSxFQUFFO1FBQzNCLHdCQUFhLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUEsc0JBQVUsRUFBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDaEM7SUFBQSxDQUFDO0lBRUYsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUMxQix3QkFBYSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFBLHNCQUFVLEVBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQ25DO0lBQUEsQ0FBQztJQUVGLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekIsd0JBQWEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBQSxzQkFBVSxFQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM3QjtJQUFBLENBQUM7QUFFTixDQUFDLENBQUMsQ0FBQyJ9