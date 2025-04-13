import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Uf } from "../../ufs/entities/uf.entity";

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @ManyToOne(() => Uf, (uf) => uf.id)
  uf: Uf;
}
