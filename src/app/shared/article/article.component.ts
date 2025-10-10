import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-article',
  imports: [CommonModule, Button],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: { imageUrl: string; title: string, subtitle: string, splitter: boolean, content: string, bgClass?: string, contentPosition?: string, buttonValue: { text: string; link: string; classname: string }  };
  articleBgClass = 'bg-white';

  ngOnInit(): void {
    // Initialization logic if needed
    this.article = this.article || { imageUrl: '', title: '', subtitle: '', splitter: false, content: '', bgClass: '', contentPosition: '', buttonValue: { text: 'Click Me', link: '#', classname: 'primaryBtn' } };
    switch (this.article.bgClass) {
      case 'lightBlue':
        this.articleBgClass = 'article-bg-light-blue';
        break;
      case 'darkBlue':
        this.articleBgClass = 'article-bg-dark-blue';
        break;
      default:
        this.articleBgClass = 'article-bg-white';
    }
    
  }

}
