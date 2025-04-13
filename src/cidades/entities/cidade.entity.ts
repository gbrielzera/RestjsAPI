import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Uf } from 'src/ufs/entities/uf.entity';
import { Estudante } from 'src/estudantes/entities/estudante.entity';

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Uf, (uf) => uf.cidades)
  uf: Uf;

  @OneToMany(() => Estudante, (estudante) => estudante.cidade)
  estudantes: Estudante[];
}
