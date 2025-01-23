import React from 'react';

function Resume() {
  // Replace this with your actual Google Drive direct link (ending with `/preview` for embedding).
  const googleDriveLink = 'https://drive.google.com/file/d/1HkgMpqcUXuHf1CMXYNDII6SAEMGpPtRy/preview';

  return (
    <div className="pt-20">
      <section className="resume">
        <div className="container">
          <h2>Resume</h2>
          <div className="resume-content">
            <div className="resume-preview">
              {/* Embed the Google Drive file in an iframe */}
              <iframe
                src={googleDriveLink}
                title="Resume"
                width="100%"
                height="600px"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="download-section">
              <a
                href="https://drive.google.com/uc?export=download&id=1HkgMpqcUXuHf1CMXYNDII6SAEMGpPtRy"
                target="_blank"
                rel="noopener noreferrer"
                className="download-cv-btn"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;







// import React from 'react';
// import { FileDown } from 'lucide-react';

// function Resume() {
//   const handleDownloadCV = () => {
//     // Replace this with your actual Google Drive sharing link
//     const googleDriveLink = 'https://drive.google.com/file/d/101FHWgO2fjbI2akTnADp9dfjg5RBIVUc/view?usp=drivesdk ';
//     window.open(googleDriveLink, '_blank');
//   };

//   return (
//     <div className="pt-20">
//       <section className="resume">
//         <div className="container">
//           <h2>Resume</h2>
//           <div className="resume-content">
//             <div className="resume-section">
//               <h3>Professional Experience</h3>
//               <div className="experience-item">
//                 <h4>Senior Full Stack Developer</h4>
//                 <p className="company">Tech Solutions Inc.</p>
//                 <p className="duration">2021 - Present</p>
//                 <ul>
//                   <li>Led development of enterprise-scale web applications</li>
//                   <li>Mentored junior developers and conducted code reviews</li>
//                   <li>Implemented CI/CD pipelines and improved deployment processes</li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="resume-section">
//               <h3>Education</h3>
//               <div className="education-item">
//                 <h4>Bachelor of Science in Computer Science</h4>
//                 <p className="institution">University of Technology</p>
//                 <p className="duration">2017 - 2021</p>
//               </div>
//             </div>

//             <div className="resume-section">
//               <h3>Skills</h3>
//               <div className="skills-grid">
//                 <div className="skill-category">
//                   <h4>Frontend</h4>
//                   <p>React, Vue.js, TypeScript, HTML5, CSS3</p>
//                 </div>
//                 <div className="skill-category">
//                   <h4>Backend</h4>
//                   <p>Node.js, Python, Java, SQL, MongoDB</p>
//                 </div>
//                 <div className="skill-category">
//                   <h4>Tools</h4>
//                   <p>Git, Docker, AWS, Jenkins, Jira</p>
//                 </div>
//               </div>
//             </div>

//             <button onClick={handleDownloadCV} className="download-cv-btn">
//               <FileDown className="download-icon" />
//               Download CV
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Resume;
