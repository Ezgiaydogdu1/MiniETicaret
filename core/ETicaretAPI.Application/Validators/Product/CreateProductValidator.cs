﻿using ETicaretAPI.Application.ViewModel.Products;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Validators.Product
{
    public class CreateProductValidator : AbstractValidator<VM_Create_Product>
    {
        public CreateProductValidator() 
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Lütfen ürün adını boş geçmeyiniz.")
                    .MaximumLength(150)
                    .MinimumLength(5)
                        .WithMessage("Lütfen ürün adını 5 ile 150 karakter arasında giriniz");
            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Lütfen stock bilgisini boş geçmeyiniz")
                .Must(s => s >= 0)
                    .WithMessage("Stock bilgisi negatif olamaz!");
            RuleFor(p => p.Price)
               .NotEmpty()
               .NotNull()
                   .WithMessage("Lütfen price bilgisini boş geçmeyiniz")
               .Must(s => s >= 0)
                   .WithMessage("Price bilgisi negatif olamaz!");

        } 
    }
}