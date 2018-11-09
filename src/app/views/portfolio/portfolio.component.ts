import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  md_size: boolean;
  experience: Object[];
  education: Object[];
  skills: Object;

  constructor() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    if( width/height < .8 ){
      // landscape: width > height
      this.md_size = true;
    }
    else if( width/height > 1.5 ){
      // vertical: width < height
      this.md_size = false;
    } else {
      // square: width ~= height
      this.md_size = false;
    }
  }
  
  ngOnInit() {
    this.setSkills();
    this.setEducations();
  }

  @HostListener('window:resize') resize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if( width/height < .8 ){
      // landscape: width > height
      this.md_size = true;
    }
    else if( width/height > 1.5 ){
      // vertical: width < height
      this.md_size = false;
    } else {
      // square: width ~= height
      this.md_size = false;
    }
  }

  setSkills() {
    this.skills = [
      'PHP', 'Laravel', 'Lumen',
      'Javascript', 'jQuery', 'Vue.js', 'Vuex',
      'Express.js', 'Node.js', 'Angular4', 'Socket.io',
      'MySQL', 'MongoDB',
      'Java', 'Jswing', 'JavaFX',
      'C++', 'C',
      'PHPUnit', 'JUnit',
      'Bootstrap', 'CSS', 'HTML',
      'Agile', 'Scrum', 'Git', 'Github', 'Jira',
      'Unit Testing', 'Automated Testing'
    ]; 
  }

  setEducations() {
    this.education = [
      {
        school: 'California State University, Northridge',
        degree: 'Master of Science',
        major: 'Software Engineering',
        start_date: 'Aug 2018',
        end_date: 'current',
        gpa: 4.0,
        honors: "",
        coursework: [
          'Software Verification and Validation',
          'Graphical User Interfaces', 'Software Architecture and Design',
          'Software Metrics'
        ]
      },
      {
        school: 'California State University, Northridge',
        degree: 'Bachelor of Science',
        major: 'Computer Science',
        start_date: 'Aug 2016',
        end_date: 'May 2018',
        gpa: 3.64,
        honors: "Dean's list - Fall 2017 and Spring 2018",
        coursework: [
          'Algorithms', 'Software Engineering',
          'Object-Oriented Software Development',
          '(Advanced) Web Development',
          'Operating Systems and Computer/System Architecture',
          'Discrete Mathematics and Probability'
        ]
      },
      {
        school: 'Los Angeles Pierce College',
        degree: 'Associate of Science',
        major: 'Programming for Computer Science, Mathematics for Transfer',
        start_date: 'Aug 2013',
        end_date: 'June 2016',
        gpa: 3.47,
        honors: "Dean's list - Spring 2015 and Spring 2016",
        coursework: [
          'Data Structures and Databases', 'Programming in Java',
          'Programming in C', 'Object Oriented Programming in C++',
          'Computer Architecture and Organization', 'Multivariable Calculus',
          'Linear Algebra', 'Physics'
        ]
      }
    ]
  }

  setExperiences() {
    this.experience = [
      {
        start_date: 'Sept 2016',
        end_date: 'Dec 2017',
        title: 'Mathematics Tutor'
      },
      {
        start_date: 'Aug 2015',
        end_date: 'Aug 2016',
        title: 'Mathematics Tutor'
      }
    ]
  }
}
