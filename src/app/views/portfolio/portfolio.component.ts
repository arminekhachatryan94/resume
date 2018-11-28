import { Component, OnInit } from '@angular/core';

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
    this.setProjects();
  }

  navigate(location) {
    if( location == 'github' ){
      window.location.href = 'https://github.com/arminekhachatryan94/';
    } else if( location == 'linkedin' ){
      window.location.href = 'https://www.linkedin.com/in/armine-khachatryan-982216120/';
    } else if( location == 'email' ){
      window.location.href = 'mailto:arminekhachatryan417@gmail.com';
    }
  }

  projectLink(link) {
    window.location.href = link;
  }

  setSkills() {
    this.skills = [
      'PHP', 'Laravel', 'Lumen',
      'Javascript', 'jQuery', 'Vue.js', 'Vuex',
      'Express.js', 'Node.js', 'Angular4/6', 'Socket.io',
      'MySQL', 'MongoDB', 'Cassandra',
      'Java', 'Spring Boot', 'Jswing', 'JavaFX',
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

  setExperiences() {
    this.experience = [
      {
        start_date: 'Sept 2018',
        end_date: 'present',
        company: 'META+Lab',
        position: 'Software Developer',
        projects: [
          {
            name: '10Letters',
            summary: 'A web application that helps transform individuals through goal-setting, self-evaluation/personal accountability, and mentorship.',
            description: [
              'Refactored and improved query efficiency with eager loading',
              'Styled new pages', 'Created middleware',
              'Refactored functions to API and used Axios to get the data',
              'Currently using Vue Croppa to crop and upload profile images',
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
            summary: 'A microservice that creates an ICS file based on a student\'s or professor\'s class schedule',
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
            summary: 'Provides students with the necessary resources to achieve academic success',
            description: [
              `Help students understand, study, and apply mathematical concepts; research and
              upload articles, tutorials, and practice worksheets with solutions onto the CSUN:
              SMART Lab’s Canvas page to help students better enhance their mathematical skills
              and knowledge to succeed in their class.`,
              'Tutored algebra, business calculus, and calculus I'
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
              groups, public speaking, and techniques for working with students with disabilities`,
              'Tutored pre-algebra, algebra, trigonometry, business calculus, and calculus I'
            ]
          }
        ]
      }
    ]
  }

  setProjects() {
    this.projects = [
      {
        name: 'Coffee Shop',
        description: [
          'Basic web application with CRUD for admins to update the menu for customers'
        ],
        technologies: 'Spring Boot, Angular 6, Apache Cassandra',
        url: 'https://github.com/arminekhachatryan94/coffee-shop'
      },
      {
        name: 'Meddit',
        description: [
          'Full stack forum similar to Reddit\'s UI design',
          'Authentication, Authorization, user roles, and comments on comments functionality',
          'SPA using Vue Router',
          'Unit and Automated Tests, and currently applying Selenium testing'
        ],
        technologies: 'Laravel, Vue.js, MySQL, PHPUnit',
        url: 'https://github.com/arminekhachatryan94/meddit'
      },
      {
        name: 'Calculator',
        description: [
          'Calculator desktop application with unit tests'
        ],
        technologies: 'Java, JSwing, JUnit',
        url: 'https://github.com/arminekhachatryan94/calculator'
      },
      {
        name: 'Umbrella Irrigation',
        description: [
          'Front-end software developer, but also worked on the back-end, from a software and hardware team of six, who developed this local and online irrigation control system for CSUN',
          'System is responsible for managing valves by turning them on/off, getting data, assigning/adjusting schedules based on weather conditions, water usage predictions, and past water usage retrospectives',
          'User management is responsible for assigning user privileges and assigning users to valves',
          'Communicates with a Raspberry Pi to send schedules, which depends on fields in MySQL tables',
          'Development process: conducted sprint planning, iteration reviews, and sprint retrospectives'
        ],
        technologies: 'Laravel, Vue, MySQL, Bootstrap, Fancytree, Axios, Jira, Git',
        url: 'http://irrigation.sandbox.csun.edu',
      },
      {
        name: 'iChat',
        description: [
          'Real-time chat SPA with authentication and authorization',
          'Users are able to view their conversations page, their conversation with a specific person, and send a new message'
        ],
        technologies: 'MongoDB, Express.js, Vue.js, Node.js, Axios, Socket.io',
        url: 'https://github.com/arminekhachatryan94/mevnchat'
      },
      {
        name: 'Voice Rehabilitation',
        description: [
          'Speech therapy application for those with articulation disorders that allows them to record their voice, displays a real-time graph that plots and analyzes the voice input against formant frequencies, and provides feedback for improving accuracy of English vowels',
          'Developed during a weekend hackathon (CSUN Accessibility Competition of 2018) sponsored by Northrop Grumman and California Communications Access Foundation',
          'Our team of five (plus one mentor) placed first out of six teams and had the opportunity to attend the 33rd Annual CSUN Assistive Technology Conference'
        ],
        technologies: 'Android Studio, MPAndroidChart, and vowel-recognizer',
        url: 'https://github.com/arminekhachatryan94/VoiceRehabilitation'
      },
      {
        name: 'Blog Project',
        description: [
          'Full stack blog web application',
          'MVC and SPA that uses foreign keys, ORM, authentication, authorization, unit testing (Jasmine and Karma for Angular 2, and PHPUnit for Laravel), CRUD, and SOLID principles'
        ],
        technologies: 'Laravel, Angular 2, MySQL, Jasmine, Karma, and PHPUnit',
        url: 'https://github.com/arminekhachatryan94/blog_project'
      },
      {
        name: 'Blackjack',
        description: [
          'Real-time networked blackjack where only 2 or 3 users are allowed to connect and play at a time'
        ],
        technologies: 'Socket.io, jQuery, Node.js, and Bootstrap',
        url: 'https://github.com/arminekhachatryan94/web_dev/tree/master/Lab4'
      },
      {
        name: 'Tsarbucks',
        description: [
          'E-commerce coffee system',
          'Authentication and authorization, as users are allowed to login as a customer or a barista. Customers are allowed to view their previous orders, their cart, and the menu page, add items to their cart, and submit new orders. Baristas are able to view the orders pending page and complete orders'
        ],
        technologies: 'LAMP stack, ran with MAMP',
        url: 'https://github.com/arminekhachatryan94/web_dev/tree/master/Lab3'
      }
    ];
  }
}
