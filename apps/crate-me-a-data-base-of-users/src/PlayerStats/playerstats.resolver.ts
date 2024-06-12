import * as graphql from "@nestjs/graphql";
import { Stars } from "../playerStats/Stars";
import { PlayerStatsService } from "./playerstats.service";

export class PlayerStatsResolver {
  constructor(protected readonly service: PlayerStatsService) {}

  @graphql.Mutation(() => Stars)
  async AwardStars(
    @graphql.Args()
    args: Stars
  ): Promise<Stars> {
    return this.service.AwardStars(args);
  }
}
