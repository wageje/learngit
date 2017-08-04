import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  	<h1>{{title}}</h1>
  	<h2>{{hero.name}}!</h2>
  	<div><label>id: </label>{{hero.id}}</div>
  	<div>
  		<label>name: </label>
  		<input [(ngModel)]="hero.name" placeholder="name">
  	</div>
  	`
})
export class AppComponent {
  title = '角色名';
  hero:Hero={
  	id:1,
  	name:'王杰'
  };
}
export class Hero{
	id:number;
	name:string;
}

