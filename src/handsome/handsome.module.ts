import { Module } from '@nestjs/common';
//自定義參數 物件畫
const HANDSOME_HAO = {
  provide: 'HANDSOME_MAN',
  useValue: {
    name: 'HAO'
  }
};

//用常數
@Module({
  providers: [
    HANDSOME_HAO //物件化參數
  ],
  exports: [
    HANDSOME_HAO //匯出用
  ]
})
export class HandsomeModule { }