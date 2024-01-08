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
      descriptionHTML: (
        <div>
          <p>
            O/A Levels (GCE Ordinary and Advanced Levels) are qualifications widely taken by
            students globally, including in the UK, Pakistan, and other Commonwealth nations.
          </p>

          <p>
            <strong>Equivalency for German Education:</strong> Obtaining an equivalency assessment
            for O/A Level qualifications is crucial when applying to the German education system.
            This ensures alignment with German standards. Universities may have specific
            requirements, and language proficiency tests may be necessary for the chosen master's
            program.
          </p>
        </div>
      ),
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
      descriptionHTML: (
        <div>
          <ul>
            <li>
              <strong>Program Suitability:</strong> Align master's programs with your academic and
              career goals.
            </li>

            <li>
              <strong>Accreditation:</strong> Verify university accreditation for global degree
              acceptance.
            </li>

            <li>
              <strong>Rankings and Reputation:</strong> Consider rankings and reputation in your
              field for better opportunities.
            </li>

            <li>
              <strong>Language of Instruction:</strong> Check course language, proficiency
              requirements, and explore language preparation if needed.
            </li>

            <li>
              <strong>Financial Considerations:</strong> Assess fees, scholarships, and living costs
              to budget for your master's program.
            </li>

            <li>
              <strong>DAAD Course Search:</strong> Utilize DAAD (
              <a href="https://www.daad.de/en/" target="_blank">
                www.daad.de/en/
              </a>
              ) for Germany course and program searches, offering comprehensive information.
            </li>
          </ul>
        </div>
      ),
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
                <strong>Language Proficiency:</strong> IELTS or German exams are essential.
              </p>

              <strong>IELTS:</strong>
              <ul>
                <li>For English-instructed programs.</li>
                <li>Aim for a program-aligned score.</li>
                <li>Prepare through practice tests.</li>
              </ul>

              <strong>German Language:</strong>
              <ul>
                <li>Required for German courses.</li>
                <li>Check language requirements.</li>
              </ul>

              <strong>ECTS & CGPA:</strong>
              <ul>
                <li>Understand ECTS credits and CGPA criteria.</li>
                <li>Ensure CGPA meets university standards.</li>
              </ul>

              <strong>Document Prep:</strong>
              <ul>
                <li>Obtain transcripts and language certificates.</li>
                <li>Ensure documents meet requirements.</li>
              </ul>
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
          <p>
            <strong>Not all universities require it.</strong>
          </p>
          <p>
            A motivation letter for studies, also known as a statement of purpose or personal
            statement, accompanies your application for admission to a university or academic
            program. It is a crucial part of your application package, explaining your motivations,
            aspirations, and qualifications for pursuing a specific field of study at a particular
            institution.
          </p>
          <p>
            <strong>To write a motivation letter for studies, consider the following:</strong>
          </p>
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
            Each point represents a section or a key aspect to cover when crafting a motivation
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
            A recommendation letter for a master's program is a valuable document showcasing your
            qualifications, skills, and personal qualities. It provides insights from an external
            perspective, supporting your application.
          </p>
          <p>
            <strong>To secure recommendation letters:</strong>
          </p>
          <ul>
            <li>
              <strong>Academic References:</strong> Professors or instructors with knowledge of your
              relevant courses or academic work.
            </li>
            <li>
              <strong>Professional References:</strong> Employers, supervisors, or colleagues
              familiar with your professional abilities.
            </li>
            <li>
              <strong>Personal References (if applicable):</strong> Mentors or community leaders
              highlighting your character and personal qualities.
            </li>
          </ul>
          <p>
            <strong>When requesting letters:</strong>
          </p>
          <ul>
            <li>
              Choose individuals who know you well and can provide specific examples of your
              strengths.
            </li>
            <li>Request letters well in advance of application deadlines.</li>
            <li>
              Provide your references with information about the program and relevant details.
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
      descriptionHTML: (
        <div>
          <ul>
            <li>
              <strong>Increased Chances:</strong> Applying early enhances your chances, especially
              in competitive programs.
            </li>
            <li>
              <strong>Deadline Awareness:</strong> Be aware of application deadlines and submit
              materials well in advance.
            </li>
            <li>
              <strong>Prepare Documents:</strong> Gather transcripts, recommendation letters, and
              required documents early in the process.
            </li>
            <li>
              <strong>Stay Informed:</strong> Regularly check university websites for updates and
              changes in application procedures.
            </li>
          </ul>
        </div>
      ),
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
                <strong>Uni-assist Overview:</strong>
                Centralized organization for evaluating academic documents for German university
                admission standards.
              </p>

              <ul>
                <li>
                  <strong>Process:</strong> Submit applications via the
                  <a class="text-blue-600" href="https://www.uni-assist.de/en/" target="_blank">
                    &nbsp;Uni-assist portal
                  </a>
                  .
                </li>

                <li>
                  <strong>Fees:</strong> Charges fees based on universities and evaluation
                  complexity.
                </li>

                <li>
                  <strong>Universities:</strong> Check if chosen universities require Uni-assist.
                </li>

                <li>
                  <strong>Deadlines:</strong> Adhere to specific semester deadlines.
                </li>

                <li>
                  <strong>Language:</strong> Proficiency in German or English may be required.
                </li>

                <li>
                  <strong>Contact:</strong> Visit
                  <a class="text-blue-600" href="https://www.uni-assist.de/en/" target="_blank">
                    &nbsp;Uni-assist website
                  </a>{' '}
                  or contact universities.
                </li>
              </ul>

              <p>
                Navigating Uni-assist is crucial for successful applications to German universities.
                Follow instructions and deadlines.
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
              <p>
                Centralized organization for evaluating academic documents for German university
                admission standards.
              </p>

              <ul>
                <li>
                  <strong>Process:</strong> Submit applications via the
                  <a class="text-blue-600" href="https://www.uni-assist.de/en/" target="_blank">
                    &nbsp;Uni-assist portal
                  </a>
                  .
                </li>

                <li>
                  <strong>Fees:</strong> Charges fees based on universities and evaluation
                  complexity.
                </li>

                <li>
                  <strong>Universities:</strong> Check if chosen universities require Uni-assist.
                </li>

                <li>
                  <strong>Deadlines:</strong> Adhere to specific semester deadlines.
                </li>

                <li>
                  <strong>Language:</strong> Proficiency in German or English may be required.
                </li>

                <li>
                  <strong>Contact:</strong> Visit
                  <a class="text-blue-600" href="https://www.uni-assist.de/en/" target="_blank">
                    &nbsp;Uni-assist website
                  </a>{' '}
                  or contact universities.
                </li>
              </ul>

              <p>
                Navigating Uni-assist is crucial for successful applications to German universities.
                Follow instructions and deadlines.
              </p>
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
                <strong>VPD (Vorprüfungsdokumentation):</strong> Uni-assist's Preliminary Document
                Review service for international students applying to German universities.
              </p>

              <p>
                The VPD assesses and evaluates educational certificates to determine their
                equivalency to the German education system.
              </p>

              <p>
                This preliminary review helps applicants understand if their qualifications meet the
                minimum requirements for admission, providing guidance in the application process.
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
                  <strong>Direct Application:</strong> Apply to German universities through their
                  online portals.
                </li>
                <li>
                  <strong>Procedure:</strong> Visit the university's website, complete the online
                  application, and submit required documents.
                </li>
                <li>
                  <strong>Language Proficiency:</strong> Demonstrate proficiency in the required
                  language.
                </li>
                <li>
                  <strong>Application Fee:</strong> Check and pay any applicable fees as per
                  university instructions.
                </li>
                <li>
                  <strong>Submission Deadline:</strong> Adhere to deadlines for the desired
                  semester.
                </li>
                <li>
                  <strong>Tracking:</strong> Monitor application status through the university's
                  online system.
                </li>
                <li>
                  <strong>Contact University:</strong> Directly inquire with the admissions office
                  for additional information.
                </li>
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
    data: {
      label: 'Did you get an admission offer?',
      descriptionHTML: (
        <div>
          <p>
            <strong>Check Admission Status:</strong> Verify your application status on the
            university's online portal.
          </p>

          <p>
            <strong>Admission Offer:</strong> If accepted, review the admission offer thoroughly,
            noting any deadlines or further instructions.
          </p>

          <p>
            <strong>Next Steps:</strong> Follow the outlined steps in the admission offer for
            enrollment and registration.
          </p>

          <p>
            <strong>No Admission Offer:</strong> If not accepted, check for any specific feedback or
            instructions provided in the rejection notice.
          </p>

          <p>
            <strong>Contact Admission Office:</strong> If uncertain or for clarification, promptly
            contact the admission office for guidance.
          </p>

          <p>
            <strong>Consider Alternatives:</strong> If not admitted, explore alternative options,
            such as reapplying, considering other universities, or seeking feedback for improvement.
          </p>
        </div>
      ),
    },
    position: { x: 0, y: 750 },
  },
  {
    id: 'c1',
    type: 'collapsableNode',
    data: {
      label: 'Book your visa appointment',
      descriptionHTML: (
        <div>
          <p>
            If you have received your admission letter, you are eligible to book a visa appointment.
          </p>

          <p>
            <strong>For Punjab Residents (Germany Embassy Islamabad):</strong>
          </p>
          <ul>
            <li>
              Visit the Germany Embassy Islamabad website:{' '}
              <a
                className="text-blue-600"
                href="https://pakistan.diplo.de/pk-en/vertretungen/botschaft"
                target="_blank"
              >
                Germany Embassy Islamabad
              </a>
            </li>
            <li>
              Follow the instructions provided on the website to apply for a visa appointment.
            </li>
          </ul>

          <p>
            <strong>For Other Regions (German Consulate Karachi):</strong>
          </p>
          <ul>
            <li>
              Visit the German Consulate Karachi website:{' '}
              <a
                className="text-blue-600"
                href="https://service2.diplo.de/rktermin/extern/choose_realmList.do?locationCode=kara&request_locale=en"
                target="_blank"
              >
                German Consulate Karachi
              </a>
            </li>
            <li>Book your visa appointment through the online appointment system.</li>
            <li>
              Additional information regarding the visa application process can be found on the
              provided links.
            </li>
          </ul>
        </div>
      ),
    },
    position: { x: 0, y: 850 },
  },
  {
    id: 'c2',
    type: 'collapsableNode',
    data: {
      label: 'Apply for hostel accommodations',
      descriptionHTML: (
        <div>
          <ul>
            <li>
              <strong>Early Application:</strong> Apply for accommodation as soon as possible to
              secure preferred options.
            </li>
            <li>
              <strong>University Housing:</strong> Check if the university offers on-campus housing
              or guidance for off-campus options.
            </li>
            <li>
              <strong>Private Options:</strong> Explore private accommodation options through
              university Facebook groups and housing apps.
            </li>
            <li>
              <strong>Application Deadlines:</strong> Be aware of accommodation application
              deadlines provided by the university.
            </li>
          </ul>
        </div>
      ),
    },
    position: { x: 0, y: 920 },
  },
  {
    id: 'c4',
    type: 'collapsableNode',
    data: {
      label: 'Open blocked account and remit blocked amount',
      descriptionHTML: (
        <div>
          <p>A blocked account is required for student/language visa applications in Germany.</p>

          <p>
            <strong>Amount for 2024:</strong> €11,208 or €934 per month for up to 12 months.
          </p>

          <p>
            <strong>Provider:</strong> Choose reputable options like{' '}
            <a
              className="text-blue-600"
              href="https://fintiba.com/solutions/companion/?utm_term=&utm_campaign=GLOBAL-EN%7CGEN%7CPMAX%7CGermany&utm_source=adwords&utm_medium=ppc&hsa_acc=6727771700&hsa_cam=20380752431&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA1-6sBhAoEiwArqlGPvjm3YhOmQqwS34dAnpY-YF_2t0Z9S7so3eZzsVP0jb0M4-MaekG6xoC5cQQAvD_BwE"
              target="_blank"
            >
              Fintiba
            </a>{' '}
            or Expatrio.
          </p>

          <p>
            <strong>Fees:</strong> Pay attention to opening and maintenance fees, and check for
            cashback or bundle options.
          </p>

          <p>
            <strong>Documents:</strong> Usually, only your passport is required; providers like
            Fintiba & Expatrio offer confirmation within 24 hours.
          </p>

          <p>
            <strong>Refund:</strong> Providers, including Expatrio & Fintiba, usually refund if your
            visa application is rejected.
          </p>
        </div>
      ),
    },
    position: { x: 0, y: 1000 },
  },
  {
    id: 'c5',
    type: 'collapsableNode',
    data: {
      label: 'Appear for visa interview',
      descriptionHTML: (
        <div>
          <p>
            Appear for the visa interview at the German Embassy/Consulate. Ensure you bring all
            required documents as specified on the official visa application website.
          </p>
        </div>
      ),
    },
    position: { x: 0, y: 1070 },
    children: [
      {
        id: 'c5_1',
        type: 'collapsableNode',
        data: {
          label: 'Visa Documents and fee',
          descriptionHTML: (
            <div>
              <p>
                Refer to the German Embassy in Islamabad's official website for the most accurate
                and up-to-date information regarding visa fees and the list of required application
                documents:
                <a
                  href="https://pakistan.diplo.de/pk-en/service/-/2208622"
                  target="_blank"
                  className="text-blue-600"
                >
                  German Embassy Islamabad
                </a>
                .
              </p>

              <p>
                Similarly, for residents in Karachi, check the German Consulate's website for
                detailed information on visa application fees and the list of required documents:
                <a
                  className="text-blue-600"
                  href="https://pakistan.diplo.de/pk-en/service/-/2208622"
                  target="_blank"
                >
                  German Consulate Karachi
                </a>
                .
              </p>
            </div>
          ),
        },
        position: { x: 400, y: 950 },
        targetPosition: Position.Left,
      },
      {
        id: 'c5_2',
        type: 'collapsableNode',
        data: {
          label: 'Visa CV',
          descriptionHTML: (
            <div>
              <p>
                When preparing a visa application for Germany, it is crucial to ensure that the
                curriculum vitae (CV) is comprehensive, including essential details such as personal
                information, educational background, work experience, and relevant skills or
                achievements.
              </p>

              <p>
                Applicants may use the same CV submitted for university applications, but it should
                provide a clear overview of qualifications and support the visa application.
              </p>
            </div>
          ),
        },
        position: { x: 400, y: 1020 },
        targetPosition: Position.Left,
      },
      {
        id: 'c5_3',
        type: 'collapsableNode',
        data: {
          label: 'Motivation Letter',
          descriptionHTML: (
            <div>
              <ul>
                <li>Submit focused Motivation Letter (LOM/SOP).</li>
                <li>Align with academic goals and course choice.</li>
              </ul>
              <ul>
                <li>
                  <strong>Introduction:</strong> Name, course, and university.
                </li>
                <li>
                  <strong>Educational Background:</strong> Highlight relevant qualifications.
                </li>
                <li>
                  <strong>Reasons for Choosing Germany:</strong> Academic reputation and program
                  fit.
                </li>
                <li>
                  <strong>Personal Motivation:</strong> Link course choice to passions and goals.
                </li>
                <li>
                  <strong>Language Proficiency:</strong> Proficiency in the language of instruction.
                </li>
                <li>
                  <strong>Financial Capability:</strong> Assure financial coverage.
                </li>
                <li>
                  <strong>Return Intentions:</strong> Commitment to return after studies.
                </li>
              </ul>
            </div>
          ),
        },
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
      descriptionHTML: (
        <div>
          <p>
            If you have received your visa, proceed to the next step in the roadmap. If not, check
            the application status, and in case of any uncertainty, contact the visa authorities.
          </p>
        </div>
      ),
    },
    position: { x: 0, y: 1130 },
  },
  {
    id: 'c7',
    type: 'collapsableNode',
    data: {
      label: 'Book flight (student discount)',
      descriptionHTML: (
        <div>
          <p>
            <strong>Student Discounts:</strong>
          </p>
          <p>
            Explore student discounts from airlines like{' '}
            <a className="text-blue-600" href="https://www.turkishairlines.com/" target="_blank">
              Turkish Airlines
            </a>{' '}
            and{' '}
            <a className="text-blue-600" href="https://www.qatarairways.com/" target="_blank">
              Qatar Airways
            </a>
            .
          </p>

          <p>
            <strong>Verify Eligibility:</strong>
          </p>
          <p>
            Ensure you meet criteria for student discounts and extra perks, such as additional
            luggage allowances.
          </p>

          <p>
            <strong>Compare and Book:</strong>
          </p>
          <p>
            Use platforms like{' '}
            <a className="text-blue-600" href="https://www.skyscanner.net/" target="_blank">
              Skyscanner
            </a>{' '}
            to compare prices, then apply student discounts on the airline's official website for
            the best deal.
          </p>
        </div>
      ),
    },
    position: { x: 0, y: 1190 },
  },
  {
    id: 'c8',
    type: 'collapsableNode',
    data: {
      label: 'Prepare for arrival',
      descriptionHTML: (
        <div>
          <p>Once your visa is secured and flights are booked:</p>
          <ol>
            <li>
              <strong>Arrange Accommodation:</strong> Confirm your accommodation arrangements,
              whether university housing or private options.
            </li>
            <li>
              <strong>Pack Essentials:</strong> Pack necessary documents, clothing, and essentials
              for your stay.
            </li>
            <li>
              <strong>Financial Preparation:</strong> Ensure you have access to funds for initial
              expenses.
            </li>
            <li>
              <strong>Learn Basic Phrases:</strong> Familiarize yourself with basic phrases in
              German for daily communication.
            </li>
          </ol>
        </div>
      ),
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
                <strong>Essential Items for Your Journey:</strong> Prepare a shopping list for a
                smooth transition to Germany.
              </p>

              <p>
                <strong>Key Items to Include:</strong>
              </p>

              <ul>
                <li>
                  <strong>Clothing:</strong> Pack suitable attire for the German climate.
                </li>
                <li>
                  <strong>Documentation:</strong> Bring necessary documents like passport, visa, and
                  permits.
                </li>
                <li>
                  <strong>Electronics:</strong> Pack essentials like a laptop, phone, and chargers.
                </li>
                <li>
                  <strong>Kitchen Essentials:</strong> For independent living, bring basic kitchen
                  items
                </li>
                <li>
                  <strong>Medications:</strong> Carry a supply of prescription medications
                </li>
                <li>
                  <strong>Language Learning Materials:</strong> Enhance German skills with
                  dictionaries or apps.
                </li>
              </ul>
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
                <strong>Join Student Associations:</strong> Connect with the Pakistani Student
                Association (PSA) and Indian Student Association (ISA) for a supportive student
                experience in Germany.
              </p>

              <p>
                <strong>Purpose:</strong> PSA and ISA assist students from Pakistan and India,
                providing help in finding accommodation, sharing local insights, and organizing
                community-building events.
              </p>

              <p>
                <strong>City-wise Presence:</strong> With chapters across Germany, PSA and ISA offer
                localized support and engagement opportunities for students in various cities.
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

              <ul>
                <li>
                  <strong>Download the DB App:</strong> Install the Deutsche Bahn app on your
                  smartphone (Android/iOS).
                </li>
                <li>
                  <strong>Create an Account:</strong> Register within the app with necessary
                  details.
                </li>
                <li>
                  <strong>Plan Your Journey:</strong> Enter departure/arrival stations, date, and
                  time.
                </li>
                <li>
                  <strong>Select Your Train:</strong> Choose from available options.
                </li>
                <li>
                  <strong>Choose Ticket Type:</strong> Select one-way, round-trip, or special fare.
                </li>
                <li>
                  <strong>Payment:</strong> Complete secure payment within the app.
                </li>
                <li>
                  <strong>Receive E-Ticket:</strong> Your electronic ticket will be stored in the
                  app for the journey.
                </li>
              </ul>
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
              <p>Essential mobile apps for student life in Germany:</p>

              <ul>
                <li>
                  <strong>Transportation:</strong> DB Navigator app for train schedules and tickets.
                </li>
                <li>
                  <strong>Language Learning:</strong> Duolingo and Babbel for German skills.
                </li>
                <li>
                  <strong>Accommodation:</strong> WG-Gesucht and Immobilienscout24 for housing.
                </li>
                <li>
                  <strong>Finance:</strong> Revolut and TransferWise for banking and transfers.
                </li>
                <li>
                  <strong>Health:</strong> TK-App for health insurance services.
                </li>
              </ul>
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
                <strong>Driving License in Germany:</strong>
                Obtain a German license after six months.
              </p>

              <p>
                <strong>Conversion:</strong>
                Check for direct conversion or required tests.
              </p>

              <p>
                <strong>Requirements:</strong>
                Meet residence permit, photo, and course completion criteria.
              </p>

              <p>
                <strong>Testing:</strong>
                Undergo theoretical/practical exams or direct conversion.
              </p>

              <p>
                <strong>Language:</strong>
                Understand German road rules; consider lessons.
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
      descriptionHTML: (
        <div>
          <p>After landing in Germany, here are the essential steps for students:</p>
          <ul>
            <li>
              <strong>- Buy SIM Card</strong>
            </li>
            <li>
              <strong>- Check-In at Accommodation</strong>
            </li>
            <li>
              <strong>- Get Student ID from University</strong>
            </li>
            <li>
              <strong>- City Registration</strong>
            </li>
            <li>
              <strong>- Get Social Security Number</strong>
            </li>
            <li>
              <strong>- Open Bank Account</strong>
            </li>
            <li>
              <strong>- Apply for Health Insurance Card</strong>
            </li>
          </ul>
          <p>
            These steps will help you navigate essential aspects of settling into life as a student
            in Germany.
          </p>
        </div>
      ),
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
