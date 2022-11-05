import { events } from "bdsx/event";
import { TestFailed } from "../functions";
import { bedrockServer } from "bdsx/launcher";
events.packetBefore(1).on((pkt, ni)=> {
    const req = pkt.connreq;
    if (!req) return;

    const cert = req.getCertificate();
    if (!cert) return;
    const realname = cert.getId();
    const namefromjson = req.getJsonValue()!.ThirdPartyName;

    if (realname !== namefromjson) {
        bedrockServer.serverInstance.disconnectClient(ni);
        TestFailed(ni, "Name Spoof");
    };

    if (namefromjson.length > 20) {
        bedrockServer.serverInstance.disconnectClient(ni);
        TestFailed(ni, "Too long name");
    };

    if (namefromjson.length < 1) {
        bedrockServer.serverInstance.disconnectClient(ni);
        TestFailed(ni, "No name");
    };
    
});