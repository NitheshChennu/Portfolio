import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Book } from 'lucide-react';

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Sathyabama Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      period: "2019 - 2023",
      gpa: "8.52/10",
      achievements: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Published research paper on Machine Learning algorithms"
      ],
      courses: [
        "Advanced Machine Learning",
        "Distributed Systems",
        "Cloud Computing",
        "Big Data"
      ]
    },
  ];

  return (
    <div className="education-page">
      <div className="container">
        <h2 className='education-h2'>Educational Background</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-timeline-item">
              <div className="education-timeline-content">
                <div className="education-header">
                  <div className="education-icon">
                    <GraduationCap />
                  </div>
                  <div className="education-title">
                    <h3>{edu.degree}</h3>
                    <div className="education-subtitle">
                      <span className="institution">
                        <MapPin className="icon" />
                        {edu.institution}
                      </span>
                      <span className="location">
                        {edu.location}
                      </span>
                      <span className="period">
                        <Calendar className="icon" />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <div className="education-gpa">
                    <Award className="icon" />
                    GPA: {edu.gpa}
                  </div>
                </div>

                <div className="education-details">
                  <div className="achievements">
                    <h4>
                      <Award className="icon" />
                      Achievements
                    </h4>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="courses">
                    <h4>
                      <Book className="icon" />
                      Key Courses
                    </h4>
                    <ul>
                      {edu.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;