import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1695405130325 implements MigrationInterface {
  name = 'CreateDatabase1695405130325';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`firstName\` varchar(30) NOT NULL, \`lastName\` varchar(100) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
