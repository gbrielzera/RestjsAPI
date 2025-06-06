import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UfsService } from "./ufs.service";
import { UfsController } from "./ufs.controller";
import { Uf } from "./entities/uf.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Uf])],
  controllers: [UfsController],
  providers: [UfsService],
})
export class UfsModule {}
