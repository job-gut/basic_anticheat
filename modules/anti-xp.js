"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packetids_1 = require("bdsx/bds/packetids");
const packets_1 = require("bdsx/bds/packets");
const event_1 = require("bdsx/event");
const functions_1 = require("../functions");
event_1.events.packetBefore(packetids_1.MinecraftPacketIds.ActorEvent).on((pkt, ni, pktid) => {
    if (pkt.event === packets_1.ActorEventPacket.Events.PlayerAddXpLevels) {
        return (0, functions_1.TestFailed)(ni, "XP");
    }
    ;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aS14cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFudGkteHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBd0Q7QUFDeEQsOENBQW9EO0FBQ3BELHNDQUFvQztBQUNwQyw0Q0FBMEM7QUFFMUMsY0FBTSxDQUFDLFlBQVksQ0FBQyw4QkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxFQUFFO0lBQ3BFLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSywwQkFBZ0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7UUFDekQsT0FBTyxJQUFBLHNCQUFVLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CO0lBQUEsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIn0=