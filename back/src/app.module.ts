import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member/entity/member.entity';

@Module({
  imports: [
    MemberModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '10.66.3.229',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'TOC',
      entities: [Member],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
