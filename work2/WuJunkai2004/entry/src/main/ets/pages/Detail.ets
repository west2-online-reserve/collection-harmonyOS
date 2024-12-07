import { AbilityStage } from '@kit.AbilityKit';

let message = 'up2'

@Entry
@Component
struct Detail {

  @Builder
  card(text: string, img: Resource){
    Divider()
      .strokeWidth(12)
      .color('#FFFFFF')
    Text(text)
      .fontSize(18)
    Image(img)
      .width('100%')
  }

  message = 'hello world'

  build() {
    //NavDestination()(){
      Column() {
        Image($rawfile('bar.jpg'))
          .height('25%')

        Divider()
          .height(10)
          .color('#FFFFFF')

        Row(){
          Image($rawfile('avatar_1.png'))
            .size({width: 48, height:48})
            .borderRadius(24)

          Blank()
            .width('60%')

          Button(){
            Text('关注')
              .fontSize(18)
          }
          .size({height: 44, width: 66})
          .borderRadius(5)
          .backgroundColor('#ffff85e5')
        }

      }
    //}
  }
}
