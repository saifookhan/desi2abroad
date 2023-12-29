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
        data: { label: 'Uni-assist Application' },
        targetPosition: Position.Right,
        position: { x: -400, y: 500 },
      },
      {
        id: 'a8_2',
        type: 'collapsableNode',
        data: { label: 'upload the VPD & apply through uni portal' },
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
        data: { label: 'Direct Application on uni portal' },
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
        data: { label: 'Shopping List' },
        position: { x: -400, y: 1200 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_2',
        type: 'collapsableNode',
        data: { label: 'Make connections (PSA/ISA)' },
        position: { x: -400, y: 1250 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_3',
        type: 'collapsableNode',
        data: { label: 'Train Ticket Tutorial' },
        position: { x: -400, y: 1320 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_4',
        type: 'collapsableNode',
        data: { label: 'Important Mobile Apps' },
        position: { x: -400, y: 1370 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_5',
        type: 'collapsableNode',
        data: { label: 'Drivers License' },
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
