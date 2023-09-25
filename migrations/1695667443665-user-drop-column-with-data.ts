import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserDropColumnWithData1695667443665 implements MigrationInterface {
  name = 'UserDropColumnWithData1695667443665';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isActive\``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`isActive\` tinyint NOT NULL DEFAULT '1'`,
    );
  }
}
