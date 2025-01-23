import React from 'react';
import { Briefcase } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'ReactJS Developer',
      company: 'Freelancer',
      date: 'NOV 2024 - Present',
      description: 'Leading development of enterprise applications',
      responsibilities: [
        'Architected and implemented scalable web applications',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines using GitHub Actions',
        'Optimized application performance and reduced loading times by 40%'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'EPAM Systems Pvt Ltd.',
      date: 'May 2024 - SEPT - 2024',
      description: 'Developed and maintained web applications',
      responsibilities: [
        'Implemented CI/CD pipelines using GitHub Actions',
        'Developed responsive front-end interfaces using React',
        'Implemented authentication and authorization systems',
        'Collaborated with UX designers to improve user experience'
      ]
    },
    {
      title: 'Full Stack Development Trainee',
      company: 'NSE TalentSprint',
      date: 'DEC 2023 - MAY 2024',
      description: 'Started career in web development',
      responsibilities: [
        'Assisted in developing front-end components',
        'Fixed bugs and implemented new features',
        'Participated in daily stand-ups and sprint planning',
        'Learned and implemented best practices in web development'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="experience-page">
        <div className="container">
          <h2 className="experience-h2">
            Professional Experience
          </h2>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <span className="timeline-date">{exp.date}</span>
                  <div className="timeline-dot">
                  </div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p>{exp.description}</p>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;