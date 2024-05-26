import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class ReviewsComponent {

  faq: { question: string; answer: string; showAnswer: boolean }[] = [
    { question: 'How can I list my property on Rentify?', answer: 'To list your property, follow these steps...', showAnswer: false },
    { question: 'Can you help me find a rental property in a specific area?', answer: 'We are here to help... kindly contact us @9494075192', showAnswer: false },
    { question: 'How does Rentify handle maintenance requests for rental properties?', answer: 'Users might want to know how Rentify manages maintenance requests and ensures timely resolution for tenants.', showAnswer: false },
    { question: 'Is there a refund policy?', answer: 'Yes, we have a refund policy...', showAnswer: false },
    { question: 'What security measures are in place to protect my personal information and transactions on Rentify?', answer: 'Rentify employs robust encryption protocols and stringent privacy policies to safeguard user data and ensure secure transactions.', showAnswer: false },

    
    
  ];
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

toggleAnswer(index: number) {
  console.log('Toggle Answer Clicked:', index);
  this.faq[index].showAnswer = !this.faq[index].showAnswer;
  console.log('FAQ Item:', this.faq[index]);
  this.cdr.detectChanges();
}

}
