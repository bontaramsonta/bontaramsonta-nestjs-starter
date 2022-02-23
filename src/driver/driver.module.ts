import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller';

@Module({
  controllers: [DriverController]
})
export class DriverModule {}
