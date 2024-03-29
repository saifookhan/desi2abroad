import { Position, MarkerType } from 'reactflow'
import { StudyParentNode, NodeBackgroundColors } from 'src/types/types'

const extraGermanyNodes: StudyParentNode[] = [
  {
    id: 'z1',
    type: 'detachedNode',
    data: {
      label: (
        <div>
          <p>
            Admission semesters: <br />
            Only 2: Summers & Winters
          </p>
          <br />
          <p>
            Deadlines: <br />
            Summer: 15th Dec, Jan <br />
            Winter: 15th July, Aug
          </p>
        </div>
      ),
      style: { backgroundColor: NodeBackgroundColors.amber50 },
    },
    position: { x: -400, y: 100 },
  },
]

const germanyNodes: StudyParentNode[] = [
  {
    id: 'a1',
    type: 'collapsableNode',
    data: {
      label: 'Start',
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.yellow300,
      },
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'a2',
    type: 'collapsableNode',
    data: {
      label: 'O/A Levels?',
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.amber100,
      },
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
                <li>Submit equivalency for Inter Board/FSC to HEC.</li>
                <li>Submit original O/A Levels certificates and copies to IBCC.</li>
                <li>Fill IBCC equivalence form with personal details</li>
                <li>IBCC evaluates and verifies O/A Levels for equivalence.</li>
                <li>IBCC issues Equivalency certificate</li>
                <li>Pay the prescribed fee for the equivalency process.</li>
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
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
      label: 'Attestation from HEC',
      descriptionHTML: (
        <div>
          <ol>
            <li>- Provide original degree and copies to HEC.</li>
            <li>- Fill HEC attestation form, attach documents.</li>
            <li>- HEC verifies degree authenticity with the institution.</li>
            <li>- HEC attests original degree after verification.</li>
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
      style: { backgroundColor: NodeBackgroundColors.amber100 },
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
            Achieve a score of 6.5 or higher in the mandatory IELTS exam to prevent potential future
            complications.
          </p>
        </div>
      ),
      style: { backgroundColor: NodeBackgroundColors.amber100 },
    },
    position: { x: 0, y: 300 },
  },
  {
    id: 'a5',
    type: 'collapsableNode',
    data: {
      label: 'Shortlist universities',
      style: { backgroundColor: NodeBackgroundColors.amber100 },
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
                FH (Fachhochschule) refers to institutions that provide practical, job oriented
                education in fields like engineering and business.
                <br />
                <br />
                Universität refers to traditional universities with a broader academic scope,
                emphasizing theoretical knowledge and research across various disciplines.
              </p>
            </div>
          ),
          videos: [
            {
              embedId: 'YWU5dhJbYDc',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
                There are two ways to apply for universities depending on the university requirement
              </p>

              <ol>
                <li>1. Direct Application</li>
                <li>2. Uni- assist</li>
              </ol>
              <p>Check the university's website for the specific application requirements.</p>
            </div>
          ),
          videos: [
            {
              embedId: 'vUUsJ1jtMnQ',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
              While choosing your city, keep in mind the following factors:
              <ol>
                <li>Academic Institution’s location</li>
                <li>Cost of living</li>
                <li>Quality of life</li>
                <li>Job opportunities</li>
                <li>Climate and environment</li>
                <li>Transportation</li>
                <li>Cultural and social aspects</li>
              </ol>
            </div>
          ),
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
                  Entry Test: Some universities or programs may require applicants to take an
                  admission test.
                </li>

                <li>NC: It refers to a limited number of spots in a program</li>

                <li>
                  NC-Free: It signifies that the program has no restricted spots and admission isn't
                  based on a set quota.
                </li>
              </ol>
            </div>
          ),
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
              <ul>
                <li>
                  <strong>IELTS:</strong>
                  <br />
                  Maybe required for programs with English instruction.
                  <br />
                  6.5+ IELTS score required.
                </li>
                <li>
                  <strong>German Language:</strong>
                  <br />
                  Needed if your course is in German.
                </li>
                <li>
                  <strong>ECTS:</strong>
                  <br />
                  Convert your credit points into ECTS.
                </li>
                <li>
                  <strong>CGPA:</strong>
                  <br />
                  2.7+ German CGPA is required.
                  <br />
                  3+ Pakistani, 7+ Indian
                </li>
              </ul>
            </div>
          ),
          videos: [
            {
              embedId: 'XYKleI-9xxI',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
          <p>It is not required by all universities.</p>

          <p>Example sections:</p>
          <ol>
            <li>- Introduction</li>
            <li>- Academic Background</li>
            <li>- Academic Achievements</li>
            <li>- Motivation+Goals</li>
            <li>- Relevant ExperiencesSkills</li>
            <li>- Why this Program/Institution</li>
            <li>- Personal Qualities</li>
            <li>- Personal Qualities</li>
            <li>- Conclusion</li>
          </ol>
        </div>
      ),
      videos: [
        {
          embedId: 'Ec8tGmW-KnU',
        },
      ],
      style: { backgroundColor: NodeBackgroundColors.amber100 },
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
            It is a document written by someone who can provide insights into your qualifications,
            skills and academic achievements.
          </p>
          <p>Choose individuals who know you well:</p>
          <ol>
            <li>- Professors or instructors in relevant courses.</li>
            <li>- Employers, supervisors, or colleagues.</li>
            <li>- Mentors or community leaders (if applicable)</li>
          </ol>
          <br />
          <p>Request well in advance of application deadlines.</p>
          <p>Provide program details for a comprehensive recommendation.</p>
        </div>
      ),
      style: { backgroundColor: NodeBackgroundColors.amber100 },
    },
    position: { x: 0, y: 500 },
  },
  {
    id: 'a8',
    type: 'collapsableNode',
    data: {
      label: 'Start applying as soon as admissions open 🎥',
      descriptionHTML: <div>This is how you can track your applications: </div>,
      videos: [{ embedId: '70FPnvMpDHM' }, { embedId: 'Hd-lBJZcWTM' }],
      style: {
        backgroundColor: NodeBackgroundColors.amber100,
      },
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
                It is an organization that evaluates international applicants' credentials for many
                German universities depending on the university requirement.
              </p>
              <br />
              <p>
                Applicants will have to submit their documents to Uni-assist which will verify and
                forward it to the respective universities.
              </p>
              <br />
              <p>
                Applicants will have to submit their documents to Uni-assist which will verify and
                forward it to the respective universities.
              </p>
            </div>
          ),
          videos: [
            {
              embedId: 'YWPfm5xb-9A',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
                It is a service offered by uni-assist that assesses the equivalency of foreign
                qualifications to the German education system for international students applying to
                German universities.
              </p>
            </div>
          ),
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
              <p>You can directly apply through the university’s online portal.</p>
              <p>Visit the official website of the university</p>
            </div>
          ),
          style: { backgroundColor: NodeBackgroundColors.amber50 },
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
      videos: [
        {
          embedId: 'MTl4uhuc6ys',
        },
      ],
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.green300,
      },
    },
    position: { x: 0, y: 750 },
  },
  {
    id: 'c1',
    type: 'collapsableNode',
    data: {
      label: 'Book your visa appointment',
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.green100,
      },
    },
    position: { x: 0, y: 850 },
  },
  {
    id: 'c2',
    type: 'collapsableNode',
    data: {
      label: 'Apply for hostel accommodations',
      style: { backgroundColor: NodeBackgroundColors.green100 },
      descriptionHTML: (
        <div>
          <ul>
            <li>Studierendenwerk: Studierendenwerk Website</li>
            <li>eBay Kleinanzeigen: eBay Kleinanzeigen</li>
            <li>Facebook Marketplace: Facebook Marketplace</li>
            <li>Reach out to friends.</li>
          </ul>
        </div>
      ),
      videos: [
        {
          embedId: '2Z_k0l1Dq0g',
        },
      ],
    },
    position: { x: 0, y: 920 },
  },
  {
    id: 'c4',
    type: 'collapsableNode',
    data: {
      label: 'Open blocked account and remit blocked amount',
      style: { backgroundColor: NodeBackgroundColors.green100 },
      descriptionHTML: (
        <div>
          <ul>
            <li>
              Students must establish a blocked account with a minimum deposit of around €11,200 for
              living expenses in Germany.
            </li>
            <li>
              Open a blocked account in Germany and use your home country’s bank or assistance from
              relatives to transfer the required amount.
            </li>
            <li>
              Amount can be sent in installments with the help of a website called Coracle before
              the deadline.
            </li>
          </ul>
        </div>
      ),
      videos: [
        { embedId: 'zfCwFd8NiGY' },
        { embedId: 'NaybBX_tFEA' },
        { embedId: 'fZz6QJShk_E' },
        { embedId: 'Bh4iP8idyaI' },
      ],
    },
    position: { x: 0, y: 1000 },
  },
  {
    id: 'c5',
    type: 'collapsableNode',
    data: {
      label: 'Appear for visa interview',
      videos: [
        {
          embedId: 'r1hKoLGstFQ',
        },
      ],
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.green100,
      },
    },
    position: { x: 0, y: 1070 },
    children: [
      {
        id: 'c5_1',
        type: 'collapsableNode',
        data: {
          label: 'Visa Documents and fee',
          alignContent: 'left',
          descriptionHTML: (
            <div>
              <p>Find the documents list on the Embassy’s website</p>
              <ol>
                <li>
                  <p>
                    Pakistan:{' '}
                    <a
                      className="text-blue-600"
                      target="_blank"
                      href="https://pakistan.diplo.de/pk-en/service/2-study-visa-seite/1676104"
                    >
                      Click here
                    </a>
                  </p>
                  <p>
                    Fee:{' '}
                    <a
                      className="text-blue-600"
                      target="_blank"
                      href="https://pakistan.diplo.de/pk-en/service/-/2208622"
                    >
                      Click here
                    </a>
                  </p>
                </li>
                <li>
                  India:{' '}
                  <a
                    className="text-blue-600"
                    target="_blank"
                    href="https://india.diplo.de/in-en/service/-/2552164"
                  >
                    Click here
                  </a>
                </li>
                <li>
                  Bangladesh:{' '}
                  <a
                    className="text-blue-600"
                    target="_blank"
                    href="https://dhaka.diplo.de/bd-en/service/visa-einreise/-/1976508"
                  >
                    Click here
                  </a>
                </li>
              </ol>
            </div>
          ),
          style: { backgroundColor: NodeBackgroundColors.green50 },
        },
        position: { x: 400, y: 950 },
        targetPosition: Position.Left,
      },
      {
        id: 'c5_2',
        type: 'collapsableNode',
        data: {
          label: 'Visa CV',
          style: { backgroundColor: NodeBackgroundColors.green50 },
          descriptionHTML: (
            <div>
              <ul>
                <li>Submit the CV that you provided as part of your university application.</li>
              </ul>
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
              <p>Sometimes the visa officer asks you to write a letter in front of them.</p>
              <p>
                It's better to print a copy of the motivation letter you submitted to the university
                and have it with you during the visa interview.
              </p>
            </div>
          ),
          videos: [
            {
              embedId: 'YLNTzKIDWK0',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.green50 },
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
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.fuchsia300,
      },
    },
    position: { x: 0, y: 1130 },
  },
  {
    id: 'c7',
    type: 'collapsableNode',
    data: {
      label: 'Book flight (student discount)',
      style: { backgroundColor: NodeBackgroundColors.fuchsia100 },
      descriptionHTML: (
        <div>
          <ul>
            <li>
              Turkish Airlines frequently provides student discounts, allowing registered students
              to increase their baggage allowance from 30kgs to 40kgs.
            </li>
            <li>Pegasus Airlines is an economical alternative but restricts baggage to 20kgs.</li>
            <li>
              Qatar Airways and Emirates may offer discounts based on booking timing and specific
              routes.
            </li>
          </ul>
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
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.fuchsia100,
      },
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
              <ul>
                <li>Clothing</li>
                <li>Personal Care Products</li>
                <li>Documentation</li>
                <li>Electronics</li>
                <li>Kitchen Essentials</li>
                <li>Medications</li>
                <li>Banking and Finances</li>
                <li>Language Learning Materials</li>
                <li>Adapters and Converters</li>
              </ul>
            </div>
          ),
          videos: [{ embedId: 'zM_7f6Rv2qQ' }, { embedId: '-FnhGBzof0o' }],
          style: { backgroundColor: NodeBackgroundColors.fuchsia50 },
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
                Pakistani Student Association (PSA) and Indian Student Association (ISA) are
                communities that help desis in Germany.
              </p>
              <p>Find facebook groups with their city names.</p>
            </div>
          ),
          videos: [
            {
              embedId: 'tcIPiG1pX5M',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.fuchsia50 },
        },
        position: { x: -400, y: 1250 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_3',
        type: 'collapsableNode',
        data: {
          label: 'Train Ticket Tutorial',
          descriptionHTML: <div></div>,
          videos: [
            {
              embedId: '8W1kFp68SGY',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.fuchsia50 },
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
              <ul>
                <li>
                  <strong>Transportation:</strong>
                  <br />
                  DB Navigator
                </li>
                <li>
                  <strong>Language Learning:</strong>
                  <br />
                  Duolingo
                  <br />
                  Babbel
                </li>
                <li>
                  <strong>Accommodation:</strong>
                  <br />
                  WG-Gesucht
                  <br />
                  Immobilienscout24
                </li>
                <li>
                  <strong>Finance:</strong>
                  <br />
                  Revolut
                  <br />
                  TransferWise
                </li>
                <li>
                  <strong>Health and Well-being:</strong>
                  <br />
                  TK-App
                </li>
              </ul>
            </div>
          ),
          videos: [
            {
              embedId: '4xdHEWCiNW4',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.fuchsia50 },
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
                Obtaining your German driver's license from your home country would be a more
                cost-effective option for you.
              </p>

              <p>
                <strong>Watch the Video:</strong>
                <a
                  className="text-blue-600"
                  href="https://youtu.be/3T7c66BppLs?si=zeOyAGDsgYnHTPx_"
                  target="_blank"
                >
                  &nbsp; here
                </a>
                .
              </p>
            </div>
          ),
          videos: [
            {
              embedId: '4xdHEWCiNW4',
            },
          ],
          style: { backgroundColor: NodeBackgroundColors.fuchsia50 },
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
      style: {
        alignContent: 'center',
        backgroundColor: NodeBackgroundColors.yellow300,
      },
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
export { germanyNodes, germanyEdges, extraGermanyNodes }
