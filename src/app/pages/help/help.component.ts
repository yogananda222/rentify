import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

  faq: { question: string; answer: string; showAnswer: boolean }[] = [
    { question: 'How do I place an order?', answer: 'To place an order, follow these steps...', showAnswer: false },
    { question: 'What payment methods are accepted?', answer: 'We accept various payment methods...', showAnswer: false },
    { question: 'How can I check the status of my order?', answer: 'To check the status of your order, log in...', showAnswer: false },
    { question: 'Is there a refund policy?', answer: 'Yes, we have a refund policy...', showAnswer: false },
    { question: 'How to contact customer support?', answer: 'You can contact our support team by...', showAnswer: false },
    { question:'How to edit my order?', answer: 'Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents', showAnswer:false},
    { question: "I want to cancel my order", answer:'We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.', showAnswer:false},
    { question: "Do you charge for delivery?", answer:"Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page.", showAnswer:false},
    {question:"How long do you take to deliver?",answer:"Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned.", showAnswer:false},  
    {question:"What are your delivery hours?",answer:"Our delivery hours vary for different locations and depends on availability of supply from Cafe." , showAnswer:false}, 
    {question:"Do you support bulk orders?",answer:"In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.", showAnswer:false}, 
    {question:"Can I order in advance?",answer:"We currently do not support this functionality. All our orders are placed and executed on-demand. However, we have an option to reserve an table in advance.", showAnswer:false}, 
    {question:"Can I change the address / number?",answer:"Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.", showAnswer:false}, 
    
    
  ];
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  // helppage.component.ts

toggleAnswer(index: number) {
  console.log('Toggle Answer Clicked:', index);
  this.faq[index].showAnswer = !this.faq[index].showAnswer;
  console.log('FAQ Item:', this.faq[index]);
  this.cdr.detectChanges();
}

navigateToHelp(){
  this.router.navigate(['/help'])
}

navigateToCart(){
  this.router.navigate(['/cart'])
}

navigateToLogin(){
  this.router.navigate(['/login'])
}

navigateToBookaTable(){
  this.router.navigate(['/Book-a-Table'])
}

navigateToFranchise() {
  this.router.navigateByUrl('/franchise');
}

navigateToHome() {
  this.router.navigate(['/home'])
}

navigateToTerms() {
  this.router.navigate(['/terms&conditions'])
}

navigateToAbout(){
  this.router.navigate(['/about'])
}

navigateToItemsPage(){
  this.router.navigate(['/'])
}
}
