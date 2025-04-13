import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UfsModule } from "./ufs/ufs.module";
import { CidadesModule } from "./cidades/cidades.module";
import { EstudantesModule } from "./estudantes/estudantes.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    UfsModule,
    CidadesModule,
    EstudantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
