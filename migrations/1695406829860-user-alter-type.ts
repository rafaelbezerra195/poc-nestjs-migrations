import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserAlterType1695406829860 implements MigrationInterface {
  name = 'UserAlterType1695406829860';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isOnline\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`isOnline\` varchar(1) NOT NULL DEFAULT 'T'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isOnline\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`isOnline\` tinyint NOT NULL DEFAULT '1'`,
    );
  }
}
