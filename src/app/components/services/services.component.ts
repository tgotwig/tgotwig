import { Component } from '@angular/core'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  card2 = {
    title: `Full-Stack-Development`,
    desc: `
      I always try to program along with best practices which are in common with the most of the people,
      and I bring the following skill-sets with me 🤗👇
    `,
    items: [
      'Beautiful SPA Websites 🖼✨',
      'Beautiful visualizations 📊✨',
      'General Bioinformatics skills 🐸',
      'Machine-Learning & AI 🤖',
      'Designing Databases 🛢',
      'Strongly Security 🔒💪',
      'Container-Based Deployments 🐳',
      'Scientific Writing 🔬✍️'
    ]
  }
}
