import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uk_name", ["imageName"], { unique: true })
@Entity("web_images", { schema: "test_db" })
export class WebImages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "image_name", unique: true, length: 100 })
  imageName: string;

  @Column("varchar", { name: "image_description", nullable: true, length: 255 })
  imageDescription: string | null;

  @Column("varchar", { name: "image_link", length: 255 })
  imageLink: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
