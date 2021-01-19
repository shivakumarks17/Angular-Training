import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyComponent } from './about/company/company.component';
import { ContactComponent } from './about/contact/contact.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, PropertyBindingComponent, TemplateReferenceVariableComponent, TwoWayDatabindingComponent, StructuralDirectivesComponent, HomeComponent, StructuralDirectivesComponent,
    AboutComponent, RegisterComponent, LoginComponent, FooterComponent, PageNotFoundComponent, CompanyComponent, ContactComponent, BikesComponent, BikeDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'students', component: StructuralDirectivesComponent },
      { path: 'about',
      component: AboutComponent,
      children: [
        {path:'company',component:CompanyComponent},
        {path:'contact',component:ContactComponent}
      ]
    },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      {path:'bikes',component:BikesComponent},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
