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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aS1uYW1lc3Bvb2YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbnRpLW5hbWVzcG9vZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyw0Q0FBMEM7QUFDMUMsNENBQThDO0FBQzlDLGNBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBQyxFQUFFO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDeEIsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPO0lBRWpCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRyxDQUFDLGNBQWMsQ0FBQztJQUV4RCxJQUFJLFFBQVEsS0FBSyxZQUFZLEVBQUU7UUFDM0Isd0JBQWEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBQSxzQkFBVSxFQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUNoQztJQUFBLENBQUM7SUFFRixJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1FBQzFCLHdCQUFhLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUEsc0JBQVUsRUFBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDbkM7SUFBQSxDQUFDO0lBRUYsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6Qix3QkFBYSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFBLHNCQUFVLEVBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQzdCO0lBQUEsQ0FBQztBQUVOLENBQUMsQ0FBQyxDQUFDIn0=