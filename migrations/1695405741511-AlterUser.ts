import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUser1695405741511 implements MigrationInterface {
  name = 'AlterUser1695405741511';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`isOnline\` tinyint NOT NULL DEFAULT 1`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isOnline\``);
  }
}
