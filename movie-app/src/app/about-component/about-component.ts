import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../service/logger';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-component.html',
  // styleUrls: ['./about-component.scss'],
  providers: [LoggerService]
})
export class AboutComponent {
  //#region constructor
  /**
   * Initializes the About component.
   * @summary Logs message indicating that the about page was visited.
   * @access public
   * @param logger - Instance of LoggerService used to log message.
   */
  public constructor(private logger: LoggerService) {
    this.logger.log('Visited About page');
  }
  //#endregion constructor
}
