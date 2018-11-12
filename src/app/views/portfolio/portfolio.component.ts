import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  experience: Object[];
  education: Object[];
  projects: Object[];
  skills: String[];
  
  ngOnInit() {
    this.setExperiences()
    this.setEducations();
    this.setSkills();
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
        end_date: 'present',
        gpa: '4.0',
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
        gpa: '3.64',
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
        gpa: '3.47',
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

  setProjects() {
    this.projects = [
      {
        name: 'Meddit',
        summary: '',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'PHPUnit'],
        url: '',
        github: ''
      }
    ];
  }

  setExperiences() {
    this.experience = [
      {
        start_date: 'Sept 2018',
        end_date: 'present',
        company: 'META+Lab',
        position: 'Back-End Developer',
        projects: [
          {
            name: '10Letters',
            summary: 'A web application for helps transform individuals through goal-setting, self-evaluation/personal accountability, and mentorship.',
            description: [
              'Refactored and improved query efficiency with eager loading',
              'Styled new pages', 'Created middleware',
              'refactored a function to an API and used Axios to get the data',
              'Technolgies: Laravel, Vue.js, MySQL, SASS'
            ],
          }
        ]
      },
      {
        start_date: 'July 2018',
        end_date: 'Aug 2018',
        company: 'META+Lab',
        position: 'Back-End Intern',
        projects: [
          {
            name: 'ICS Microservice',
            summary: 'A microservice that creates an ICS file based on a student\'s or professor\'s class schedule.',
            description: [
              'Utilized repository pattern to ensure the abstraction of infrastructure and domain',
              'Leveraged test-driven development to establish a project guideline',
              'Technologies: Lumen, MySQL, PHPUnit'
            ],

          }
        ]
      },
      {
        start_date: 'Sept 2016',
        end_date: 'Dec 2017',
        company: 'Learning Resource Center',
        position: 'Mathematics Tutor',
        projects: [
          {
            name: '',
            summary: 'Provides students with the necessary resources to achieve academic success.',
            description: [
              `Help students understand, study, and apply mathematical concepts; research and
              upload articles, tutorials, and practice worksheets with solutions onto the CSUN:
              SMART Lab’s Canvas page to help students better enhance their mathematical skills
              and knowledge to succeed in their class.`,
              'Tutored algebra, business calculus, and calculus I.'
            ]
          }
        ]
      },
      {
        start_date: 'Aug 2015',
        end_date: 'Aug 2016',
        company: 'Center for Academic Success',
        position: 'Mathematics Tutor',
        projects: [
          {
            name: '',
            summary: 'Empowers students to achieve academic success.',
            description: [
              `Help students understand mathematical concepts and how to succeed in class;
              attended and participated in tutor trainings to improve tutoring techniques,
              peer mentoring techniques, learning strategies, lesson planning, working with
              groups, public speaking, and techniques for working with students with disabilities.`,
              'Tutored pre-algebra, algebra, trigonometry, business calculus, and calculus I.'
            ]
          }
        ]
      }
    ]
  }
}
