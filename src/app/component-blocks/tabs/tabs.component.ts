import { Component, Input, TemplateRef, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterViewChecked {
  @Input() variantName!: string;
  @Input() preview!: TemplateRef<any>;
  @Input() htmlCode!: string;
  @Input() jsxCode!: string;
  @Input() putCard!: string;
  @Input() id!: string;

  tabState: number = 0;

  constructor(private highlightService: HighlightService, private clipboard: Clipboard) {}

  showTab(tabNumber: number) {
    this.tabState = tabNumber;
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  copyToClipboard(str: string) {
    this.clipboard.copy(str);
  }
}
