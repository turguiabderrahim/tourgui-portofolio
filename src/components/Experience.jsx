import "../css/Experience.css";

const experienceData = [
  {
    company: "Webhelp Enterprise",
    position: "Telecommunications Specialist",
    type: "Full-time",
    duration: "Aug 2023 - Jun 2025",
    location: "Meknes, Morocco",
    workType: "On-site",
    description: "Help Desk Support for a Moroccan ISP project",
    skills: ["Help Desk Support", "English", "Technical Support"]
  },
  {
    company: "NewDev MAROC",
    position: "Software Developer",
    type: "Internship",
    duration: "Mar 2023 - Jun 2023",
    location: "Fès-Meknès, Morocco",
    workType: "Hybrid",
    description: "Software development and database management",
    skills: ["MySQL", "C#", "Web Development"]
  },
  {
    company: "AI Marketing",
    position: "Software Developer",
    type: "Internship",
    duration: "Aug 2022 - Jan 2023",
    location: "Remote",
    workType: "Remote",
    description: "Analytics and data analysis with Excel",
    skills: ["Analytics", "Microsoft Excel", "Data Analysis"]
  },
  {
    company: "Sudan Soft",
    position: "Software Developer",
    type: "Full-time",
    duration: "Nov 2021 - May 2022",
    location: "Khartoum, Sudan",
    workType: "Remote",
    description: "Web development and database management",
    skills: ["Web Development", "MySQL", "Backend Development"]
  },
  {
    company: "EPSI Schule",
    position: "Software Developer",
    type: "Internship",
    duration: "May 2021 - Jul 2021",
    location: "Fez, Morocco",
    workType: "Hybrid",
    description: "Analytics and database development",
    skills: ["Analytics", "MySQL", "System Design"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.position}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <span className={`job-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                </div>

                <div className="experience-meta">
                  <span className="duration">📅 {exp.duration}</span>
                  <span className="location">📍 {exp.location}</span>
                  <span className="work-type">{exp.workType}</span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="skills-tags">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}