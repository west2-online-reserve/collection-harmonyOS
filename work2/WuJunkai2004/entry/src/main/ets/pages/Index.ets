import { common, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let message = 'up2'

const TAG: string = '[Page_UIAbilityComponentsInteractive]';
const DOMAIN_NUMBER: number = 0xFF00;

function log(str: string){
  hilog.info(DOMAIN_NUMBER, TAG, str)
}

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;

  @Builder
  avatar(src: Resource, name: string){
    Button(){
      Column(){
        Image(src)
          .sourceSize({width: 48, height: 48})
          .borderRadius(24)
          .width(48)
          .height(48)

        Text(name)
      }
    }
    .backgroundColor('#FFFFFF')
    .width(72)
    .onClick( ()=> {
      log('click' + name)
      let wantInfo: Want = {
        deviceId: '', // deviceId为空表示本设备
        bundleName: 'com.example.wujunkai2004.Detail',
        moduleName: 'entry', // moduleName非必选
        abilityName: 'FuncAbilityA',
        parameters: {
          info: name
        }
      }
      this.context.startAbility(wantInfo)
        .then(()=>{log('start success')})
        .catch((e: BusinessError)=>{log('start failed')})
    })
  }

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
    Column() {
      Navigation(){
        Grid() {
          this.avatar($rawfile('avatar_1.png'), 'up1')
          this.avatar($rawfile('avatar_1.png'), 'up2')
          this.avatar($rawfile('avatar_1.png'), 'up3')
          this.avatar($rawfile('avatar_1.png'), 'up4')
          this.avatar($rawfile('avatar_1.png'), 'up5')
        }
        .height('10%')
        .borderRadius(5)

        Divider()
          .height('6%')
          .strokeWidth('20')
          .color('#F2F2F2')

        Swiper(new SwiperController()){
          Column(){
            Text(message + '的视频动态')
              .fontSize(22)

            this.card('这是一个视频动态的文本，我不知道写什么就乱写了', $rawfile('avatar_1.png'))

            this.card('这是拎一个到奥德赛默默地发欧美撒旦欧码但是莫马上发没发哦默哀是', $rawfile('avatar_1.png'))
          }
        }
        .vertical(true)
        .borderRadius(12)
        .itemSpace(10)
      }
      .hideTitleBar(true)
    }
  }
}
