import { Position, MarkerType } from 'reactflow'
import { StudyParentNode } from 'src/types/types'

const germanyNodes: StudyParentNode[] = [
  {
    id: 'a1',
    type: 'collapsableNode',
    data: {
      label: 'Start',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'a2',
    type: 'collapsableNode',
    data: {
      label: 'O/A Levels?',
    },
    targetPosition: Position.Left,
    position: { x: 0, y: 100 },
    children: [
      {
        id: 'a2_1',
        type: 'collapsableNode',
        data: {
          label: 'Equivalency from IBCC',
          descriptionHTML: (
            <div>
              <p>Get your equivalency made from Inter Board / FSC to send it to HEC</p>
              <ol>
                <li>
                  <strong>Document Submission:</strong> Submit the original certificates of your O/A
                  Levels along with their copies to the IBCC office.
                </li>

                <li>
                  <strong>Application Form:</strong> Fill out the IBCC equivalence application form.
                  Provide personal details, information about the foreign institution, subjects
                  studied, and grades obtained in O/A Levels.
                </li>

                <li>
                  <strong>Verification:</strong> IBCC verifies the authenticity of your O/A Levels
                  certificates from the respective examination board or institution abroad.
                </li>

                <li>
                  <strong>Evaluation:</strong> IBCC assesses the O/A Levels qualifications to
                  determine their equivalence with the Pakistani education system. This includes
                  reviewing subjects studied, grades obtained, and the level of education in
                  comparison to local standards.
                </li>

                <li>
                  <strong>Equivalency Certificate:</strong> Upon successful evaluation, IBCC issues
                  an equivalency certificate specifying the equivalence of your O/A Levels
                  qualifications to the Pakistani education system.
                </li>

                <li>
                  <strong>Fee Payment:</strong> Pay the prescribed fee for the equivalency process.
                </li>
              </ol>
              <a
                className="text-blue-600"
                href="https://ibcc.edu.pk/rules-for-equivalence/"
                target="_blank"
              >
                IBCC Website
              </a>
            </div>
          ),
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 100 },
      },
    ],
  },
  {
    id: 'a3',
    type: 'collapsableNode',
    data: {
      label: 'Equivalency from HEC',
      descriptionHTML: (
        <div>
          <ol>
            <li>
              <strong>Submission of Documents:</strong> Submit the original degree along with copies
              to the HEC office.
            </li>
            <li>
              <strong>Application Form:</strong> Fill out the HEC attestation application form and
              attach it with the required documents.
            </li>
            <li>
              <strong>Verification:</strong> HEC verifies the degree's authenticity with the
              respective educational institution.
            </li>
            <li>
              <strong>Attestation:</strong> Once verified, HEC attests or stamps the original
              degree, confirming its authenticity.
            </li>
          </ol>
          <a
            className="text-blue-600"
            href="https://www.hec.gov.pk/english/services/students/DAS/Pages/Degree-Attestation.aspx"
            target="_blank"
          >
            HEC Website
          </a>
        </div>
      ),
    },
    position: { x: 0, y: 200 },
  },
  {
    id: 'a4',
    type: 'collapsableNode',
    data: {
      label: 'Take IELTS exam',
      descriptionHTML: (
        <div>
          <p>
            Score a 6.5 or above in your IELTS exam. This is a mandatory test that you have to take
            to avoid any future problems.
          </p>
        </div>
      ),
    },
    position: { x: 0, y: 300 },
  },
  {
    id: 'a5',
    type: 'collapsableNode',
    data: {
      label: 'Shortlist universities',
    },
    position: { x: 0, y: 350 },
    children: [
      {
        id: 'a5_1',
        type: 'collapsableNode',
        data: {
          label: 'Types of Unis: FH vs Uni',
          descriptionHTML: (
            <div>
              <p>
                "FH" typically refers to "Fachhochschule" in German, which translates to "University
                of Applied Sciences" in English. These institutions focus on providing practical and
                job-oriented education in various fields like engineering, business, social work,
                and more. They often collaborate closely with industries, offering programs that
                equip students with skills directly applicable in the workforce.
                <br />
                <br />
                "Universität" refers to a traditional university in German-speaking countries. These
                institutions offer a broader range of academic disciplines and degrees, including
                liberal arts, natural sciences, social sciences, and professional studies.
                Universities generally emphasize theoretical knowledge, research, and academic
                exploration, providing a comprehensive education that often includes specialized and
                theoretical aspects of a field. <br /> <br />
                While both FHs and universities offer higher education, their focus, teaching
                methodologies, and academic emphases might differ, catering to different educational
                preferences and career aspirations.
              </p>
            </div>
          ),
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 300 },
      },
      {
        id: 'a5_2',
        type: 'collapsableNode',
        data: {
          label: 'Uni-assist vs Direct Application',
          descriptionHTML: (
            <div>
              <p>
                <strong>Uni-assist:</strong> This is an organization that evaluates international
                applicants' credentials on behalf of many German universities. If you're applying to
                a university that requires applications to go through Uni-assist, you'll submit your
                documents (transcripts, certificates, etc.) to Uni-assist. They verify the documents
                and ensure they meet the university's requirements before forwarding them to the
                respective universities for further assessment. Some universities in Germany require
                international applicants to use Uni-assist for their applications.
              </p>

              <p>
                <strong>Direct Application:</strong> With direct application, you apply directly to
                the university of your choice. You submit your application materials (transcripts,
                certificates, etc.) directly to the university's admissions office according to
                their specific requirements and guidelines. Not all universities in Germany use
                Uni-assist; some allow international students to apply directly to them without
                involving an intermediary organization.
              </p>

              <p>
                Both methods have their advantages and specific requirements depending on the
                university and the country from which you're applying. It's essential to check the
                specific application procedures and requirements of the universities you're
                interested in to determine which method to use.
              </p>
            </div>
          ),
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 310 },
      },
      {
        id: 'a5_3',
        type: 'collapsableNode',
        data: {
          label: 'How to choose cities vs states?',
          descriptionHTML: (
            <div>
              <ol>
                <li>
                  <strong>Academic Institutions:</strong> Research universities or programs of
                  interest and choose a city hosting the desired course or program.
                </li>
                <li>
                  <strong>Cost of Living:</strong> Consider living expenses; cities like Munich are
                  pricier compared to Leipzig or Dresden.
                </li>
                <li>
                  <strong>Quality of Life:</strong> Explore atmosphere, job opportunities,
                  recreation, and cultural offerings.
                </li>
                <li>
                  <strong>Job Opportunities:</strong> Certain cities offer better prospects in
                  specific industries; for instance, tech in Berlin or finance in Frankfurt.
                </li>
                <li>
                  <strong>Climate and Environment:</strong> Regions have varying climates; consider
                  preferences for weather and seasons.
                </li>
                <li>
                  <strong>Transportation:</strong> Check connectivity for travel within Germany or
                  neighboring countries.
                </li>
                <li>
                  <strong>Cultural and Social Aspects:</strong> Explore unique cultures, traditions,
                  and social scenes of different cities.
                </li>
              </ol>
            </div>
          ),
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 380 },
      },
      {
        id: 'a5_4',
        type: 'collapsableNode',
        data: {
          label: 'Entry-test/NC/NC-free',
          descriptionHTML: (
            <div>
              <ol>
                <li>
                  <strong>Entry Test:</strong> Some universities or programs require applicants to
                  take an entry test or examination as part of the admission process. This test
                  assesses various skills, knowledge, or suitability for a specific program.
                </li>

                <li>
                  <strong>NC (Numerus Clausus):</strong> NC refers to a restricted number of
                  available spots in a particular program. Students compete for these spots based on
                  criteria such as grades, test scores, or other qualifications. It sets a maximum
                  number of students who can enroll in the program.
                </li>

                <li>
                  <strong>NC-Free:</strong> When a program is labeled as "NC-free," it means there's
                  no restricted number of available spots. Admission is not based on a predefined
                  quota or limited number of students. Instead, eligible applicants who meet the
                  minimum requirements are typically admitted without facing competition due to
                  limited spots.
                </li>
              </ol>
            </div>
          ),
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 380 },
      },
      {
        id: 'a5_5',
        type: 'collapsableNode',
        data: {
          label: 'IELTS / German language / ECTS / CGPA',
          descriptionHTML: (
            <div>
              <p>
                <strong>Language Proficiency:</strong>
                Essential for studying in Germany, language proficiency is demonstrated through
                IELTS or German language exams.
              </p>

              <strong>IELTS:</strong>
              <ul>
                <li>May be required for programs with English instruction.</li>
                <li>Aim for a score aligned with program requirements.</li>
                <li>Prepare through practice tests and language exercises.</li>
              </ul>

              <strong>German Language:</strong>
              <ul>
                <li>Needed if your course is in German.</li>
                <li>Check language requirements and consider language courses.</li>
              </ul>

              <strong>ECTS:</strong>
              <ul>
                <li>Standard for comparing student progress in Europe.</li>
                <li>Understand ECTS credits and their alignment with your academic system.</li>
              </ul>

              <strong>CGPA:</strong>
              <ul>
                <li>Considered during the application process.</li>
                <li>Ensure your CGPA meets or exceeds university criteria.</li>
              </ul>

              <strong>Document Preparation:</strong>
              <ul>
                <li>Obtain transcripts, IELTS scores, and language certificates.</li>
                <li>Ensure documents meet university and program requirements.</li>
              </ul>

              <strong>Contact Information:</strong>
              <p>
                For language proficiency requirements, contact the university's admissions office or
                language department. Check the university's official website for detailed
                information on ECTS, CGPA requirements, and document guidelines.
              </p>
            </div>
          ),
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 450 },
      },
    ],
  },
  {
    id: 'a6',
    type: 'collapsableNode',
    data: {
      label: 'Write Letter of Motivation ',
      descriptionHTML: (
        <div>
          <p>Not all unis require it.</p>
          <p>
            A motivation letter for studies, also known as a statement of purpose or a personal
            statement, accompanies your application for admission to a university or academic
            program. It's a crucial part of your application package and serves to explain your
            motivations, aspirations, and qualifications for pursuing a particular field of study at
            a specific institution.
          </p>
          <p>To write a motivation letter for studies:</p>
          <ol>
            <li>- Research and Planning</li>
            <li>- Introduction</li>
            <li>- Academic Background and Achievements</li>
            <li>- Motivation and Goals</li>
            <li>- Relevant Experiences and Skills</li>
            <li>- Connection to the Program/Institution</li>
            <li>- Personal Qualities and Conclusion</li>
          </ol>
          <p>
            Each point represents a section or a key aspect to cover when writing a motivation
            letter for studies.
          </p>
        </div>
      ),
    },
    position: { x: 0, y: 420 },
  },
  {
    id: 'a7',
    type: 'collapsableNode',
    data: {
      label: 'Letters of Recommendation',
      descriptionHTML: (
        <div>
          <p>
            A recommendation letter for a master's program is a document written by someone who can
            speak to your qualifications, skills, academic abilities, and personal qualities. It
            supports your application by providing insights into your capabilities and character
            from an external perspective.
          </p>
          <p>To get recommendation letters for a master's program:</p>
          <ol>
            <li>
              - Academic References: Professors or instructors who have taught you in relevant
              courses or supervised your academic work.
            </li>
            <li>
              - Professional References: Employers, supervisors, or colleagues who can attest to
              your professional abilities and skills.
            </li>
            <li>
              - Personal References (if applicable): Mentors or community leaders who can speak to
              your character and personal qualities.
            </li>
          </ol>
          <br />
          <p>When requesting recommendation letters:</p>
          <ul>
            <li>
              - Choose individuals who know you well and can provide specific examples highlighting
              your strengths.
            </li>
            <li> - Request letters well in advance of your application deadlines.</li>
            <li>
              - Provide your references with information about the program you're applying for and
              any relevant details.
            </li>
          </ul>
        </div>
      ),
    },
    position: { x: 0, y: 500 },
  },
  {
    id: 'a8',
    type: 'collapsableNode',
    data: {
      label: 'Start applying as soon as admissions open',
    },
    position: { x: 0, y: 620 },
    children: [
      {
        id: 'a8_1',
        type: 'collapsableNode',
        data: {
          label: 'Uni-assist Application',
          descriptionHTML: (
            <div>
              <p>
                <strong>Uni-assist</strong> short for University Application Service for
                International Students, is a centralized organization in Germany that streamlining
                the application process. Here's a quick overview:
              </p>
              <br />

              <ul>
                <li>
                  <strong>Purpose:</strong> Evaluates academic documents for German university
                  admission standards, demonstrating equivalence.
                </li>
                <br />
                <li>
                  <strong>Process:</strong> Submit applications and documents through the
                  <a className="text-blue-600" href="https://www.uni-assist.de/en/" target="_blank">
                    &nbsp;Uni-assist portal
                  </a>
                  . Uni-assist assesses and forwards evaluations to chosen German universities.
                </li>
                <br />
                <li>
                  <strong>Fees:</strong> Charges fees for services, varying based on the number of
                  universities and evaluation complexity.
                </li>
                <br />
                <li>
                  <strong>Participating Universities:</strong> Not all require Uni-assist; check
                  specific requirements of chosen universities.
                </li>
                <br />
                <li>
                  <strong>Deadlines:</strong> Specific application deadlines for each semester;
                  adhere to ensure timely processing.
                </li>
                <br />
                <li>
                  <strong>Language Requirements:</strong> Proficiency in German or English (via
                  tests like IELTS or TOEFL) may be required.
                </li>
                <br />
                <li>
                  <strong>Contact:</strong> For inquiries, visit the
                  <a className="text-blue-600" href="https://www.uni-assist.de/en/" target="_blank">
                    &nbsp;Uni-assist website
                  </a>{' '}
                  or contact your chosen universities.
                </li>
                <br />
              </ul>

              <p>
                Navigating the Uni-assist Application is crucial for international students aspiring
                to study in Germany. Follow instructions and deadlines for a successful application.
              </p>
            </div>
          ),
        },
        targetPosition: Position.Right,
        position: { x: -400, y: 500 },
      },
      {
        id: 'a8_2',
        type: 'collapsableNode',
        data: {
          label: 'upload the VPD & apply through uni portal',
          descriptionHTML: (
            <div>
              <ul>
                <p>
                  VPD, or Vorprüfungsdokumentation, is a Preliminary Document Review provided by
                  uni-assist. It assesses the equivalence of your foreign qualifications to German
                  education standards.
                </p>
                <br />

                <li>
                  <strong>Obtaining VPD:</strong>
                  <p>
                    Complete the preliminary review process with uni-assist to receive your VPD.
                  </p>
                </li>
                <br />

                <li>
                  <strong>University's Online Portal:</strong>
                  <p>Log in to the official portal of the German university you are applying to.</p>
                </li>
                <br />

                <li>
                  <strong>Upload VPD:</strong>
                  <p>
                    Follow the portal instructions to upload your VPD. Ensure that your document
                    adheres to specified format and size guidelines.
                  </p>
                </li>
                <br />

                <li>
                  <strong>Application Form:</strong>
                  <p>
                    Complete the university's application form within the portal. Provide accurate
                    personal information, academic history, and any additional required documents.
                  </p>
                </li>
                <br />

                <li>
                  <strong>Check Requirements:</strong>
                  <p>
                    Verify and fulfill any additional requirements specified by the university for
                    the application process.
                  </p>
                </li>
                <br />

                <li>
                  <strong>Submission:</strong>
                  <p>Submit your application through the university portal.</p>
                </li>
                <br />
              </ul>
            </div>
          ),
        },
        targetPosition: Position.Right,
        position: { x: -400, y: 570 },
      },
      {
        id: 'a8_3',
        type: 'collapsableNode',
        data: {
          label: 'Uni-assist (VPD)',
          descriptionHTML: (
            <div>
              <p>
                In the context of uni-assist, "VPD" stands for "Vorprüfungsdokumentation," which
                translates to "Preliminary Document Review" in English.
                <br />
                <br />
                The VPD is a service provided by uni-assist for international students applying to
                universities in Germany. It involves the assessment and evaluation of educational
                certificates and documents submitted by applicants.
                <br />
                <br />
                Upon receiving the required documents, uni-assist conducts a preliminary review
                (VPD) to determine the equivalency of foreign qualifications to the German education
                system. This review helps applicants understand if their qualifications meet the
                minimum requirements for admission to German universities.
                <br />
                <br />
                The VPD doesn't guarantee admission but serves as an initial assessment to guide
                applicants in the application process, informing them whether their educational
                background meets the standards set by the German universities.
              </p>
            </div>
          ),
        },
        targetPosition: Position.Right,
        position: { x: -400, y: 640 },
      },
      {
        id: 'a8_4',
        type: 'collapsableNode',
        data: {
          label: 'Direct Application on uni portal',
          descriptionHTML: (
            <div>
              <ul>
                <li>
                  <strong>Overview:</strong>
                  Many German universities allow students to apply directly through their official
                  online portals. This process bypasses the need for intermediary services like
                  uni-assist.
                </li>
                <br />

                <li>
                  <strong>Procedure:</strong>
                  Visit the official website of the German university you are interested in. Locate
                  the admissions or application section to access the online portal.
                </li>
                <br />

                <li>
                  <strong>Document Submission:</strong>
                  Upload the required documents directly to the university's portal. Ensure
                  documents meet the specified format and size requirements.
                </li>
                <br />

                <li>
                  <strong>Application Form:</strong>
                  Complete the university's online application form with accurate personal and
                  academic information.
                </li>
                <br />

                <li>
                  <strong>Additional Requirements:</strong>
                  Check for any specific requirements outlined by the university, such as letters of
                  recommendation or a statement of purpose.
                </li>
                <br />

                <li>
                  <strong>Language Proficiency:</strong>
                  Demonstrate proficiency in the required language (German or English) as per the
                  university's guidelines.
                </li>
                <br />

                <li>
                  <strong>Application Fee:</strong>
                  Be aware of any application fees that the university may charge. Pay attention to
                  payment instructions.
                </li>
                <br />

                <li>
                  <strong>Submission Deadline:</strong>
                  Adhere to the application deadlines set by the university for the desired
                  semester.
                </li>
                <br />

                <li>
                  <strong>Tracking Application:</strong>
                  Utilize the university's online tracking system to monitor the status of your
                  application.
                </li>
                <br />

                <li>
                  <strong>Contact University:</strong>
                  For inquiries or additional information, contact the university's admissions
                  office directly.
                </li>
                <br />
              </ul>
            </div>
          ),
        },
        position: { x: -400, y: 710 },
        targetPosition: Position.Right,
      },
    ],
  },
  {
    id: 'b1',
    type: 'collapsableNode',
    data: { label: 'Did you get an admission offer?' },
    position: { x: 0, y: 750 },
  },
  {
    id: 'c1',
    type: 'collapsableNode',
    data: { label: 'Book your visa appointment' },
    position: { x: 0, y: 850 },
  },
  {
    id: 'c2',
    type: 'collapsableNode',
    data: { label: 'Apply for hostel accommodations' },
    position: { x: 0, y: 920 },
  },
  {
    id: 'c4',
    type: 'collapsableNode',
    data: {
      label: 'Open blocked account and remit blocked amount',
    },
    position: { x: 0, y: 1000 },
  },
  {
    id: 'c5',
    type: 'collapsableNode',
    data: {
      label: 'Appear for visa interview',
    },
    position: { x: 0, y: 1070 },
    children: [
      {
        id: 'c5_1',
        type: 'collapsableNode',
        data: { label: 'Visa Documents and fee' },
        position: { x: 400, y: 950 },
        targetPosition: Position.Left,
      },
      {
        id: 'c5_2',
        type: 'collapsableNode',
        data: { label: 'Visa CV' },
        position: { x: 400, y: 1020 },
        targetPosition: Position.Left,
      },
      {
        id: 'c5_3',
        type: 'collapsableNode',
        data: { label: 'Motivation Letter' },
        position: { x: 400, y: 1080 },
        targetPosition: Position.Left,
      },
    ],
  },
  {
    id: 'c6',
    type: 'collapsableNode',
    data: {
      label: 'Did you receive your visa?',
    },
    position: { x: 0, y: 1130 },
  },
  {
    id: 'c7',
    type: 'collapsableNode',
    data: {
      label: 'Book flight (student discount)',
    },
    position: { x: 0, y: 1190 },
  },
  {
    id: 'c8',
    type: 'collapsableNode',
    data: {
      label: 'Prepare for arrival',
    },
    position: { x: 0, y: 1280 },
    children: [
      {
        id: 'c8_1',
        type: 'collapsableNode',
        data: {
          label: 'Shopping List',
          descriptionHTML: (
            <div>
              <p>
                <strong>Shopping List Overview:</strong>
                Before your journey to Germany, ensure a smooth transition by preparing a concise
                shopping list for essential items.
              </p>

              <p>
                <strong>Watch the Videos:</strong>
                Check out my YouTube videos for detailed insights on what to bring to Germany
                <a
                  className="text-blue-600"
                  href="https://youtu.be/zM_7f6Rv2qQ?si=TgdrQhdYww660GVZ"
                  target="_blank"
                >
                  &nbsp; View Video 1
                </a>
                <a
                  className="text-blue-600"
                  href="https://youtu.be/-FnhGBzof0o?si=lejG6gFDdxCcfDPi"
                  target="_blank"
                >
                  &nbsp; View Video 2
                </a>
              </p>
              <p>
                <strong>Key Items to Include:</strong>
              </p>
              <br />

              <p>
                <strong>Clothing:</strong>
                Pack suitable attire for the German climate, including jackets, comfortable shoes,
                and versatile layers.
              </p>

              <p>
                <strong>Personal Care Products:</strong>
                Bring preferred personal care items; local stores offer a variety of brands.
              </p>

              <p>
                <strong>Documentation:</strong>
                Ensure necessary documents like passport, visa, and permits. Carry printed copies.
              </p>

              <p>
                <strong>Electronics:</strong>
                Pack essentials like a laptop, phone, and chargers. Consider a power adapter.
              </p>

              <p>
                <strong>Kitchen Essentials:</strong>
                For independent living, bring basic kitchen items; supplement locally as needed.
              </p>

              <p>
                <strong>Medications:</strong>
                Carry a supply of prescription medications; familiarize yourself with local
                pharmacies.
              </p>

              <p>
                <strong>Banking and Finances:</strong>
                Inform your bank; set up online banking for easy access to funds.
              </p>

              <p>
                <strong>Language Learning Materials:</strong>
                Enhance German skills with language learning resources like dictionaries or apps.
              </p>

              <p>
                <strong>Adapters and Converters:</strong>
                Ensure compatibility with German outlets for electronic devices. Purchase adapters
                if necessary.
              </p>
            </div>
          ),
        },
        position: { x: -400, y: 1200 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_2',
        type: 'collapsableNode',
        data: {
          label: 'Make connections (PSA/ISA)',
          descriptionHTML: (
            <div>
              <p>
                <strong>Overview:</strong>
                Join the Pakistani Student Association (PSA) and Indian Student Association (ISA) to
                enhance your German student experience. These communities provide support,
                connections, and a sense of belonging.
              </p>

              <p>
                <strong>Purpose:</strong>
                PSA and ISA assist students from Pakistan and India, offering help in finding
                accommodation, sharing local insights, and organizing events for community building.
              </p>

              <p>
                <strong>City-wise Presence:</strong>
                With chapters across Germany, PSA and ISA provide localized support and engagement
                opportunities for students in various cities.
              </p>

              <p>
                <strong>Watch the Video:</strong>
                Explore the activities and benefits of PSA and ISA in my YouTube video
                <a
                  className="text-blue-600"
                  href="https://youtu.be/tcIPiG1pX5M?si=ja8_5a908gsURqRx"
                  target="_blank"
                >
                  &nbsp; here
                </a>
                .
              </p>

              <p>
                <strong>Getting Involved:</strong>
                New students are encouraged to connect with these associations, attend events, and
                actively participate in community activities for a vibrant student experience.
              </p>

              <p>
                <strong>Contact Information:</strong>
                For more details or to get involved, visit the PSA and ISA chapters in your city or
                check their online platforms.
              </p>

              <p>
                Connecting with PSA and ISA opens doors to a supportive community, fostering
                friendships and enriching your study abroad journey in Germany.
              </p>
            </div>
          ),
        },
        position: { x: -400, y: 1250 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_3',
        type: 'collapsableNode',
        data: {
          label: 'Train Ticket Tutorial',
          descriptionHTML: (
            <div>
              <p>
                <strong>How to Book:</strong>
              </p>

              <p>
                <strong>Download the DB App:</strong>
                Install the Deutsche Bahn app on your smartphone. It's available for both Android
                and iOS devices.
              </p>

              <p>
                <strong>Create an Account:</strong>
                Register for an account within the app, providing necessary details.
              </p>

              <p>
                <strong>Plan Your Journey:</strong>
                Enter your departure and arrival stations, along with the desired date and time of
                travel.
              </p>

              <p>
                <strong>Select Your Train:</strong>
                Browse through available train options and choose the one that suits your schedule.
              </p>

              <p>
                <strong>Choose Ticket Type:</strong>
                Select the type of ticket you need, whether it's a one-way, round-trip, or any
                special fare.
              </p>

              <p>
                <strong>Payment:</strong>
                Complete the payment process securely within the app.
              </p>

              <p>
                <strong>Receive E-Ticket:</strong>
                Your electronic ticket will be generated and stored in the app. Show this E-ticket
                during your journey.
              </p>

              <p>
                <strong>Watch the Video:</strong>
                For a step-by-step guide on booking train tickets with the DB app, watch my YouTube
                video
                <a
                  className="text-blue-600"
                  href="https://youtu.be/8W1kFp68SGY?si=BJRhmQyCVFbKOnv6"
                  target="_blank"
                >
                  &nbsp; here
                </a>
                .
              </p>
            </div>
          ),
        },
        position: { x: -400, y: 1320 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_4',
        type: 'collapsableNode',
        data: {
          label: 'Important Mobile Apps',
          descriptionHTML: (
            <div>
              <p>
                Streamline your student life in Germany with must-have mobile apps spanning various
                categories, including transportation, language learning, accommodation, finance,
                health, and communication.
              </p>

              <p>
                <strong>Transportation:</strong>
                <ul>
                  <li>
                    <strong>DB Navigator:</strong> Official Deutsche Bahn app for train schedules
                    and tickets.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Language Learning:</strong>
                <ul>
                  <li>
                    <strong>Duolingo:</strong> User-friendly language learning for improving German
                    skills.
                  </li>
                  <li>
                    <strong>Babbel:</strong> Tailored language courses focusing on practical
                    communication.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Accommodation:</strong>
                <ul>
                  <li>
                    <strong>WG-Gesucht:</strong> Popular app for finding shared accommodation.
                  </li>
                  <li>
                    <strong>Immobilienscout24:</strong> Explore a wide range of rental properties
                    and apartments.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Finance:</strong>
                <ul>
                  <li>
                    <strong>Revolut:</strong> Mobile banking with a focus on international students.
                  </li>
                  <li>
                    <strong>TransferWise:</strong> Convenient for international money transfers.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Health and Well-being:</strong>
                <ul>
                  <li>
                    <strong>TK-App:</strong> Provided by Techniker Krankenkasse, offering health
                    insurance services.
                  </li>
                </ul>
              </p>
              <p>
                <strong>Watch the Video:</strong>
                Explore detailed usage tips in my YouTube video
                <a
                  className="text-blue-600"
                  href="https://youtu.be/4xdHEWCiNW4?si=JSBcNwnniS9cHdwm"
                  target="_blank"
                >
                  &nbsp; here
                </a>
                .
              </p>
            </div>
          ),
        },
        position: { x: -400, y: 1370 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_5',
        type: 'collapsableNode',
        data: {
          label: 'Drivers License',
          descriptionHTML: (
            <div>
              <p>
                <strong>Acquiring a Driving License in Germany:</strong>
                Acquiring a driving license in Germany can significantly enhance your mobility.
                Here's what you need to know as a student:
              </p>

              <p>
                <strong>Eligibility:</strong>
                <ul>
                  <li>
                    International students can use their home country's driving license for the
                    first six months in Germany.
                  </li>
                  <li>
                    After six months, you'll need to obtain a German driving license if you plan to
                    continue driving.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Conversion Process:</strong>
                <ul>
                  <li>
                    Some countries have agreements with Germany for direct license conversion, while
                    others may require tests.
                  </li>
                  <li>Check the specific requirements based on your country of origin.</li>
                </ul>
              </p>

              <p>
                <strong>Requirements for Conversion:</strong>
                <ul>
                  <li>Valid residence permit.</li>
                  <li>Passport-sized photos.</li>
                  <li>Proof of completion of a first aid course.</li>
                  <li>Certificate of eye test.</li>
                </ul>
              </p>

              <p>
                <strong>Testing Process:</strong>
                <ul>
                  <li>
                    If direct conversion isn't possible, you might need to take theoretical and
                    practical exams.
                  </li>
                  <li>The theoretical exam typically covers traffic rules and road signs.</li>
                  <li>
                    The practical exam involves driving with an examiner to demonstrate your skills.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Language Proficiency:</strong>
                <ul>
                  <li>Ensure you have a good understanding of German road signs and rules.</li>
                  <li>Consider taking driving lessons in German to prepare for the exams.</li>
                </ul>
              </p>

              <p>
                <strong>Watch the Video:</strong>
                For a comprehensive guide and insights into the driving license process, watch my
                YouTube video
                <a
                  className="text-blue-600"
                  href="https://youtu.be/3T7c66BppLs?si=zeOyAGDsgYnHTPx_"
                  target="_blank"
                >
                  &nbsp; here
                </a>
                .
              </p>

              <p>
                <strong>Post-License Considerations:</strong>
                <ul>
                  <li>Familiarize yourself with German traffic regulations and parking rules.</li>
                  <li>Understand the implications of traffic violations on your driving record.</li>
                </ul>
              </p>

              <p>
                <strong>Contact Information:</strong>
                For specific information and inquiries, contact the local driver's license office or
                check their online resources.
              </p>
            </div>
          ),
        },
        position: { x: -400, y: 1420 },
        targetPosition: Position.Right,
      },
    ],
  },
  {
    id: 'd1',
    type: 'collapsableNode',
    data: {
      label: 'Land in Germany',
    },
    position: { x: 0, y: 1400 },
  },
]

const basicEdgeConfig = {
  sourceHandle: 'c',
  style: {
    strokeWidth: 2,
    stroke: '#FF0072',
  },
}

const germanyEdges = [
  {
    ...basicEdgeConfig,
    id: 'a1-d1',
    source: 'a1',
    target: 'd1',
    sourceHandle: 'c',
  },
  {
    ...basicEdgeConfig,
    id: 'a2-a2_1',
    source: 'a2',
    target: 'a2_1',
    sourceHandle: 'b',
    label: 'yes',
  },
  {
    ...basicEdgeConfig,
    id: 'a2_1-a3',
    source: 'a2_1',
    target: 'a3',
    sourceHandle: 'c',
    type: 'smoothstep',
  },
  {
    id: 'e1-12',
    source: '1',
    target: '12',
    sourceHandle: 'b',
  },
  {
    id: 'e1-13',
    source: '1',
    target: '13',
    sourceHandle: 'b',
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    sourceHandle: 'c',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    label: 'marker size and color',
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },

  {
    id: 'a3-a4',
    source: 'a3',
    target: 'a4',
    ...basicEdgeConfig,
  },
  {
    id: 'a4-a5',
    source: 'a4',
    target: 'a5',
    ...basicEdgeConfig,
  },
  {
    id: 'a5-a6',
    source: 'a5',
    target: 'a6',
    ...basicEdgeConfig,
  },
  {
    id: 'a5-a5_1',
    source: 'a5',
    target: 'a5_1',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    id: 'a5-a5_2',
    source: 'a5',
    target: 'a5_2',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    id: 'a5-a5_3',
    source: 'a5',
    target: 'a5_3',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    id: 'a5-a5_4',
    source: 'a5',
    target: 'a5_4',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    id: 'a5-a5_5',
    source: 'a5',
    target: 'a5_5',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_1',
    source: 'a8',
    target: 'a8_1',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_2',
    source: 'a8',
    target: 'a8_2',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_3',
    source: 'a8',
    target: 'a8_3',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_4',
    source: 'a8',
    target: 'a8_4',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c5-c5_1',
    source: 'c5',
    target: 'c5_1',
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'c5-c5_2',
    source: 'c5',
    target: 'c5_2',
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'c5-c5_3',
    source: 'c5',
    target: 'c5_3',
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_1',
    source: 'c8',
    target: 'c8_1',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_2',
    source: 'c8',
    target: 'c8_2',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_3',
    source: 'c8',
    target: 'c8_3',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_4',
    source: 'c8',
    target: 'c8_4',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_5',
    source: 'c8',
    target: 'c8_5',
    sourceHandle: 'd',
  },
]
export { germanyNodes, germanyEdges }
