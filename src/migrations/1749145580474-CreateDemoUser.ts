import { MigrationInterface, QueryRunner } from "typeorm";
import * as bcrypt from "bcrypt";

export class CreateDemoUser1749145580474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const hash = await bcrypt.hash('password123', 10);
        await queryRunner.query(`INSERT INTO users (email, password, name, role) VALUES ('admin@example.com', '${hash}', 'Admin', 'ADMIN')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM users WHERE email = 'admin@example.com'`);
    }

}
