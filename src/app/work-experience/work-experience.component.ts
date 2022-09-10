import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 ={
            fecha: "2019-2020",
            ubicacion:"Orizaba, Ver",
            puesto: "Java Developer",
            empresa: "Desp",
            logros : [
                      {descripcion : "Experto en java"},
                      {descripcion : "Creacion de framework"}
            ]
    };
    let work2 ={
            fecha: "2020-2022",
            ubicacion:"Cordoba, Ver",
            puesto: "CEO",
            empresa: "Losit",
            logros : [
                      {descripcion : "Desarrollo de IA"},
                      {descripcion : "Sistema automotriz"}
                    ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }

}
