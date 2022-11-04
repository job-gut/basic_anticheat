"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFailed = void 0;
const common_1 = require("bdsx/common");
const launcher_1 = require("bdsx/launcher");
function TestFailed(ni, cheatName) {
    const player = ni.getActor();
    const playerName = player.getNameTag();
    const pls = launcher_1.bedrockServer.serverInstance.getPlayers();
    for (const pl of pls) {
        pl.sendMessage(`[Jobgut-BAC] §8${playerName} §chas failed §8${cheatName}`);
    }
    ;
    console.log(`[Jobgut-BAC] ${playerName} has failed ${cheatName}`);
    return common_1.CANCEL;
}
exports.TestFailed = TestFailed;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdDQUFxQztBQUNyQyw0Q0FBOEM7QUFFOUMsU0FBZ0IsVUFBVSxDQUFDLEVBQXFCLEVBQUUsU0FBaUI7SUFDL0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRyxDQUFDO0lBQzlCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QyxNQUFNLEdBQUcsR0FBRyx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0RCxLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtRQUNsQixFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixVQUFVLG1CQUFtQixTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQzlFO0lBQUEsQ0FBQztJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLFVBQVUsZUFBZSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBRWxFLE9BQU8sZUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFaRCxnQ0FZQztBQUFBLENBQUMifQ==