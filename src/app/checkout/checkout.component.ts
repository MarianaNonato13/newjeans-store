import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Album } from '../models/album.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: Album[] = [];
  total: number = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      paymentMethod: ['credit_card', Validators.required],
      cardName: [''],
      cardNumber: [''],
      expiry: [''],
      cvv: ['']
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();

    // Update validators based on payment method
    this.checkoutForm.get('paymentMethod')?.valueChanges.subscribe(method => {
      const cardControls = ['cardName', 'cardNumber', 'expiry', 'cvv'];
      if (method === 'credit_card') {
        cardControls.forEach(control => {
          this.checkoutForm.get(control)?.setValidators([Validators.required]);
          this.checkoutForm.get(control)?.updateValueAndValidity();
        });
      } else {
        cardControls.forEach(control => {
          this.checkoutForm.get(control)?.clearValidators();
          this.checkoutForm.get(control)?.updateValueAndValidity();
        });
      }
    });

    // Initial check for validators
    this.checkoutForm.updateValueAndValidity();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => {
      const price = item.price || 0; // Ensure price exists
      return acc + (price * (item.quantity || 1));
    }, 0);
  }

  onSubmit(): void {
    if (this.checkoutForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, preencha todos os campos obrigatórios!',
      });
      return;
    }

    Swal.fire({
      title: 'Sucesso!',
      text: 'Seu pedido foi realizado com sucesso!',
      icon: 'success',
      confirmButtonText: 'Voltar para Loja'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.clearCart();
        this.router.navigate(['/']);
      }
    });
  }
}
