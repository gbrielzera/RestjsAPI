import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cidade } from 'src/cidades/entities/cidade.entity';

@Entity()
export class Uf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Cidade, (cidade: Cidade) => cidade.uf)
  cidades: Cidade[];
}
