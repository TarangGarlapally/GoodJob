import React from "react";

export default function JobTile(){
    const props = {
        "id": "f1427cc4-c9d2-4b12-b881-e0646265fc56",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/f1427cc4-c9d2-4b12-b881-e0646265fc56",
        "created_at": "Wed Mar 17 22:05:44 UTC 2021",
        "company": "George Mason University",
        "company_url": "https://www2.gmu.edu/",
        "location": "Fairfax, VA",
        "title": "Application Developer",
        "description": "<p>Application Developer</p> <p>George Mason University’s College of Humanities and Social Sciences (CHSS) seeks applicants for a full-time Application Developer to join the CHSS IT team, which builds and manages web applications in support of the college’s business needs and web presence. George Mason University has a strong institutional commitment to the achievement of excellence and diversity among its faculty and staff, and strongly encourages candidates to apply who will enrich Mason’s academic and culturally inclusive environment.</p> <p>Responsibilities: The Application Developer is responsible for system maintenance, database management, and code development related to the PHP-based Budget Tracking System (BTS). BTS has several major functions that support critical finance and human resource business operations. Management of BTS requires frequent engagement with the Finance and HR staff to determine requirements, diagnose problems, and provide general system support.</p> <p>This position also provides support to other applications maintained by the CHSS IT team, including the CHSS wCMS, EnrollChat, and others. Technologies used by these applications are Ruby, Rails, JavaScript, S3, cloud-hosted systems and services, and Google Analytics. In collaboration with the CHSS IT team, the Application Developer will maintain, enhance, support, document and secure applications developed by the team. The Developer works collaboratively within the team to plan and prioritize development, shape the technical direction of projects, and interacts directly with university clients to determine requirements, diagnose problems, train users, provide support, and ensure the successful ongoing delivery of system services. Position responsibilities will also include monitoring performance, error, and user analytics data, applying knowledge to predict future needs and recommending enhancements, and staying up to date on industry trends to provide technical leadership for incorporating the latest tools, technologies, and approaches to the team’s practices.</p> <p>Required Qualifications:</p> <ul> <li>Demonstrable procedural and object-oriented PHP development experience (PHP code samples required);</li> <li>Experience with front end development including with HTML, CSS, and JavaScript;</li> <li>An agile, pragmatic approach to development;</li> <li>Comfort working directly with clients on support, training, and needs analysis;</li> <li>SQL scripting skills;</li> <li>Experience with Linux server activities and Oracle;</li> <li>Experience and proficiency with code version control;</li> <li>Experience configuring and maintaining development environments.</li> </ul> <p>Preferred Qualifications:</p> <ul> <li>Experience developing with Ruby and Rails;</li> <li>Knowledge of AWS configuration and usage;</li> <li>Demonstrable experience with automated testing of PHP applications;</li> <li>Comfort and experience working with and applying web analytics.</li> </ul> <p>Special Instructions to Applicants: For full consideration, applicants must apply for position number 01818z at <a href='https://jobs.gmu.edu/'>https://jobs.gmu.edu/</a>; complete and submit the online application; and upload a cover letter, resume, and a list of three professional references with contact information.</p> <p>PHP code samples should be provided as a URL link included in either the cover letter or the resume, or uploaded as additional documentation. PHP code samples are required to receive full consideration.</p> <p>Equity George Mason University is an equal opportunity/affirmative action employer, committed to promoting inclusion and equity in its community. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability or veteran status, or any characteristic protected by law.</p> ",
        "how_to_apply": "<p>Apply for position number 01818z at <a href='https://jobs.gmu.edu/'>https://jobs.gmu.edu/</a></p> ",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0dkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6483d550eaf777941d58d1170b99a40c3e8041d4/GMUWebLogo.jpg"
    }
    return <div className="job-tile">
        <img className="job-title-left" src={props.company_logo}/>

        <div className="job-tile-left nocopy">
            <h2>{props.title}</h2>
            <h4>{props.company}</h4>
            <p>{props.location}</p>
        </div>
        <div>
            <div className="job-tile-right"><p>{props.type}</p></div>
        </div>
    </div>;
}