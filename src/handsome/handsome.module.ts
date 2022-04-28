import { Module } from '@nestjs/common';

const HANDSOME_HAO = {
  provide: 'HANDSOME_MAN',
  useFactory: async () => {
    //模擬需經過一段時間創建 使用useFactory 2秒後才創建
    const getHAO = new Promise(resolve => {
      setTimeout(() => resolve({ name: 'HAO' }), 2000);
    });
    const HAO = await getHAO;
    return HAO;
  }
};

@Module({
  providers: [
    HANDSOME_HAO
  ],
  exports: [
    HANDSOME_HAO
  ]
})
export class HandsomeModule { }
