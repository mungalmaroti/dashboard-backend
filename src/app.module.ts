import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//import { AppService } from './app.service';
//import { databaseProviders } from './../database.providers';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule, EmployeeModule,AuthModule],
  controllers: [AppController],
  providers: [],
  exports: []
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
