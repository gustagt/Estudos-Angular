import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourselistComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        
        this.courses=[
            {
                id: 1,
                name: 'Angular: fomrs',
                imageUrl: '',
                price: 99.99,
                code: 'PKS-2131',
                duration: 120,
                rating: 4.4,
                releaseDate: 'december, 2, 2021'
            },
            {
                id: 2,
                name: 'Angular: hTTP',
                imageUrl: '',
                price: 45.99,
                code: 'PKS-8931',
                duration: 60,
                rating: 3.4,
                releaseDate: 'november, 2, 2021'
            }
        ]
    }


}