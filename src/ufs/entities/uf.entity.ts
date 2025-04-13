// src/ufs/entities/uf.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Uf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false }) // Já é NOT NULL por padrão
  nome: string;

  @Column({ length: 2, unique: true, nullable: false }) // Garanta que sigla é obrigatória
  sigla: string;
}
