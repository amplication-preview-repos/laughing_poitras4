import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlayerStatsService } from "./playerstats.service";
import { Stars } from "../playerStats/Stars";

@swagger.ApiTags("playerStats")
@common.Controller("playerStats")
export class PlayerStatsController {
  constructor(protected readonly service: PlayerStatsService) {}

  @common.Post("/award-stars")
  @swagger.ApiOkResponse({
    type: Stars
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AwardStars(
    @common.Body()
    body: Stars
  ): Promise<Stars> {
        return this.service.AwardStars(body);
      }
}
