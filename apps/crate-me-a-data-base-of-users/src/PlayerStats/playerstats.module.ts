import { Module } from "@nestjs/common";
import { PlayerStatsService } from "./playerstats.service";
import { PlayerStatsController } from "./playerstats.controller";
import { PlayerStatsResolver } from "./playerstats.resolver";

@Module({
  controllers: [PlayerStatsController],
  providers: [PlayerStatsService, PlayerStatsResolver],
  exports: [PlayerStatsService],
})
export class PlayerStatsModule {}
