import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(private navController: NavController) {
        // What goes inside the constructor?
        localNotifications.on("click", (notification, state) => {
            let alert = Alert.create({
                title: "Notification Clicked",
                subTitle: "You just clicked the scheduled notification",
                buttons: ["OK"]
            });
            this.navController.present(alert);
        });
    }

    public schedule() {
        localNotifications.schedule({
            title: "Test Title",
            text: "Delayed Notification",
            at: new Date(new Date().getTime() + 5 * 1000),
            sound: null
        });
    }

}
