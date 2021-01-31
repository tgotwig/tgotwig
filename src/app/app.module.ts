import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { CertificationsComponent } from './components/certifications/certifications.component'
import { ServicesComponent } from './components/services/services.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'certificates', component: CertificationsComponent },
  { path: '**', redirectTo: '/home' },
]

import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CertificationsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, relativeLinkResolution: 'legacy' } // <-- debugging purposes only
 // <-- debugging purposes only
    ),
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
