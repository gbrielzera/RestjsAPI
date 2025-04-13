import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Cidade } from "../../cidades/entities/cidade.entity";

@Entity()
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 20, unique: true })
  matricula: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ name: "dt_nascimento", length: 10 })
  dtNascimento: string;

  @ManyToOne(() => Cidade, (cidade) => cidade.id)
  cidade: Cidade;
}
