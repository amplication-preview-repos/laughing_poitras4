import { Injectable } from "@nestjs/common";
import { Stars } from "../playerStats/Stars";

@Injectable()
export class PlayerStatsService {
  constructor() {}
  async AwardStars(args: Stars): Promise<Stars> {
    throw new Error("Not implemented");
  }
}
