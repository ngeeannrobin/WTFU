import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  @Input() message: string;
  loop: boolean = true;
  
  ngOnInit(): void {
    this.updateloop();
  }

  ngOnDestroy(): void{
    this.loop = false;
  }

  // hacky fix for a bug, component not updating after exiting from authentication pop up.
  async updateloop(){
    while (this.loop) {
      await this.Delay(100);
      console.log("test");
    }
  }

  async Delay(ms){
    return new Promise( resolve => setTimeout(resolve, ms));
  }

}
