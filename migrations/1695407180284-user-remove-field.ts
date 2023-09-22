import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRemoveField1695407180284 implements MigrationInterface {
  name = 'UserRemoveField1695407180284';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isOnline\``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`isOnline\` varchar(1) NOT NULL DEFAULT 'T'`,
    );
  }
}
