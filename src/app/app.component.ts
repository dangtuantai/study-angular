import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
@Component({
  selector: 'app-root',
  template: `<router-outlet />`,  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private hubConnection: HubConnection;

  constructor(
  ) {
  }

  async ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl("http://localhost:7013/timeHub").build();

    this.hubConnection.start().then(() => console.log("Connection started")).catch(err => console.log("Error while starting connection: " + err));

    this.hubConnection.on("ReceiveMessage", (message) => {
      console.log("Message received: ", message);
    });
  }
}
