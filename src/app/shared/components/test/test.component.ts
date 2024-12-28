import { Component, signal } from "@angular/core";

@Component({
    selector:'app-test',
    templateUrl:"./test.component.html",
})

export class TestComponent{

    count = signal(0);

    increment(){
        this.count.set(this.count() + 1)
    }

    decriment(){

        if(this.count() > 0 ){
            this.count.set(this.count() - 1)
        }
    }
}


// signalsiz ishlatilgan holat 
// export class TestComponent{

    //     count = 0;
    
    //     increment(){
    //         this.count +=1
    //     }
    
    //     decriment(){
    
    //        this.count -=1
    //     }
    // }

    // katta proyektlarda signaldan foydalanganimiz yaxshi kichiklarida esa signal siz yozganimiz yaxshiroq