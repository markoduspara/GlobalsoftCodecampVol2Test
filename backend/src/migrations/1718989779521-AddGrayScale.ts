import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGrayScale1718989779521 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE web_images ADD grayscale BOOLEAN;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE web_images DROP COLUMN grayscale;`)
    }

}
