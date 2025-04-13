// ufs.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Uf } from "./entities/uf.entity"; // Ajuste o caminho conforme sua estrutura
import { UfsService } from "./ufs.service";
import { UfsController } from "./ufs.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Uf])], // Isso torna UfRepository disponível
  controllers: [UfsController],
  providers: [UfsService],
})
export class UfsModule {}
