import { MigrationInterface, QueryRunner } from "typeorm";

export class DodajGrayscaleBool1718984909151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "web_images" ADD "grayscale" TINYINT  DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "web_images" DROP COLUMN "grayscale"`);
    }

}
