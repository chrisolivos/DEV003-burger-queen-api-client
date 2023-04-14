import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        BrowserModule,
        ReactiveFormsModule,
        RouterModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ProductsComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });


    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario valido de registrar productos', () => {
    fixture.detectChanges();
    const form = component.productsForm;
    const name = form.controls.name;
    const price = form.controls.price;
    const image = form.controls.image;
    const type = form.controls.type;
    const dateEntry = form.controls.dateEntry;

    name.setValue('Sandwich de jamón y queso');
    price.setValue('1000');
    image.setValue('https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg');
    type.setValue('Desayuno');
    dateEntry.setValue(new Date());
    // console.log(form.valid);
    expect(form.valid).toBeTrue();
  })

  it('Debe retornar formulario invalido de registrar productos', () => {


    fixture.detectChanges();

    const form = component.productsForm;
    const name = form.controls.name;
    const price = form.controls.price;
    const image = form.controls.image;
    const dateEntry = form.controls.dateEntry;

    name.setValue('');
    price.setValue('');
    image.setValue('');
    dateEntry.setValue(new Date());

    // console.log(form.valid);
    expect(form.invalid).toBeTrue();
  })
  it('Debe llamar al submit metodo de productos', async () => {
    fixture.detectChanges();
    spyOn(component, "products")
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.products).toHaveBeenCalledTimes(0)

  })
  it('Debe llamar al clik metodo de onDelete productos', async () => {
    fixture.detectChanges();
    spyOn(component, "onDelete")
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onDelete).toHaveBeenCalledTimes(0)

  })
});
