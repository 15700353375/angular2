import { TemplatesListComponent } from './../../../../ngAdmin/src/app/pages/enterprise-apply/apply-approval/modal/templates-list.component';
import { Directive, ElementRef, HostListener, Input, DoCheck } from '@angular/core';

@Directive({
 selector: '[appLoading]',
})

export class LoadingDirective {
  constructor(private el: ElementRef) {
 }

//  目前两种方法都可以实现，但是具体那种方法更好，有待研究
//  input本身检测数据变化
  @Input() set appLoading(condition: boolean) {

    let loading2 = document.querySelector('.loading');
    if(condition && loading2){

      this.el.nativeElement.removeChild(loading2)
    }else{
      let newNode = document.createElement('div');
          newNode.innerText = '飞速加载中，请稍候。。。';
          newNode.className = 'loading'
          this.el.nativeElement.appendChild(newNode);
    }
  }

  // DoCheck方法监听数据变化，页面离开要销毁
  //  @Input('appLoading') condition: any;
  //    ngDoCheck() {
  //     let newNode = document.createElement('div');
  //         newNode.innerText = '飞速加载中，请稍候。。。';
  //         newNode.className = 'loading'
  //     let loading2 = document.querySelector('.loading');
  //      if(!this.condition){
  //       this.el.nativeElement.appendChild(newNode);
  //      }else{
  //        if(loading2){
  //         this.el.nativeElement.removeChild(loading2)
  //        }
  //      }
       
  //     };
     



   
}