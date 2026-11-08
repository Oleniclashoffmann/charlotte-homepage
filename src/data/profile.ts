// Everything personal lives here. Content taken from Sumpf_Academic_CV.pdf (phone number deliberately left out).

export const profile = {
  name: 'Charlotte Sumpf',
  tagline: 'Educational psychology · human development · youth well-being',
  // DRAFT intro written from the CV - Charlotte should rewrite this in her own words.
  about:
    'I am an M.A. student in Educational Psychology (Human Development) at McGill University in Montréal. ' +
    'My research looks at social determinants of health and academic functioning in youth, resilience and ' +
    'cultural connectedness among Indigenous youth, and the neurodevelopment of ADHD and autism.',
  photo: '', // e.g. '/img/portrait.jpg' once she sends one; until then a monogram circle is shown
  role: 'M.A. Student, Educational Psychology (Human Development)',
  institution: 'McGill University, Montréal',
  // DRAFT, derived from the CV - Charlotte should confirm or reword
  researchInterests: [
    'Social determinants of health in youth',
    'Resilience and cultural connectedness among Indigenous youth',
    'ADHD symptoms and neurodevelopment',
    'Social attention in autism',
    'Academic functioning and well-being',
  ],
  // Shown as buttons on the start page and as links in the footer. Leave a URL empty to hide it;
  // 'soon' shows it greyed out without a link (CV is still a work in progress).
  links: {
    CV: 'soon',
    Email: 'mailto:charlotte@sumpf-online.de',
    LinkedIn: 'https://www.linkedin.com/in/charlotte-sumpf-bb6a1b264/',
    ResearchGate: 'https://www.researchgate.net/profile/Charlotte-Sumpf-2',
    ORCID: 'https://orcid.org/0009-0004-4174-0512',
    'Google Scholar': '',
  } as Record<string, string>,
};

// Timelines on the CV page, newest first.
//   html:     the main line; may contain <a href="...">links</a>
//   period:   shown in gray at the right of the main line
//   bullets:  descriptions, tied to the entry by a thin line on the left
//   children: sub-entries (e.g. an exchange during a degree)
export type TimelineEntry = {
  html: string;
  period?: string;
  bullets?: string[];
  children?: (string | { html: string; period?: string; bullets?: string[] })[];
};

export const educationTimeline: TimelineEntry[] = [
  {
    period: '2025 – 2027',
    html: 'M.A., Educational Psychology (Human Development), <a href="https://www.mcgill.ca">McGill University</a> (Canada).',
    bullets: [
      'GPA 4.0/4.0 · Supervisors: Prof. Jacob A. Burack and Prof. Tasmia Hai',
      'Thesis: Social determinants of health and academic functioning in youth.',
    ],
  },
  {
    period: '2021 – 2025',
    html: 'B.A., Sociology and Psychology, <a href="https://www.lmu.de/en/">Ludwig-Maximilians-Universität</a> (Germany).',
    bullets: [
      'Sociology (120 ECTS) and Psychology (60 ECTS); final German grade 1.5',
      'Thesis: Between Secularization and Spirituality: The Transformation of Faith Through Digitalization',
    ],
    children: [
      { period: '2023 – 2024',
        html: 'Exchange minor in Diversity and Gender Studies, <a href="https://www.maastrichtuniversity.nl">Maastricht University</a> (Netherlands).' },
    ],
  },
];

export const researchTimeline: TimelineEntry[] = [
  {
    period: '2025 – now',
    html: 'Graduate Student Researcher, McGill Youth Study Team (MYST Lab), McGill University (Prof. Jacob A. Burack).',
    bullets: [
      'Contribute to longitudinal, community-engaged research with Indigenous communities.',
      'Collaborate on studies of social attention in autistic youth and developmental experiences of youth in out-of-home care.',
    ],
  },
  {
    period: '2025 – now',
    html: 'Graduate Student Researcher, Cognition, Attention &amp; Achievement Research, McGill University (Prof. Tasmia Hai).',
    bullets: [
      'Research on social determinants of health and academic functioning in youth.',
      'Analyze structural MRI data on cortical thickness and white matter connectivity &amp; tractography methods.',
      'ABCD Study data examining social determinants, ADHD symptoms, and neurodevelopment.',
    ],
  },
  {
    period: '2024 – 2025',
    html: 'Research Assistant, PRODO Research Group, LMU University Hospital, Munich (Dr. Belinda Platt).',
    bullets: [
      'CHIMPS-NET study: data entry and analysis.',
      'GuG-Auf study: supported program evaluation and co-facilitated family group interventions.',
      'CoCo study: conducted cortisol-based stress testing and managed data entry.',
    ],
  },
  {
    period: '2024 – 2025',
    html: 'Research Assistant, Toppspell Research Group, LMU University Hospital, Munich (Prof. Dr. Christina Moll).',
    bullets: [
      'Administered standardized cognitive and spelling assessments to elementary school children, examining cognitive processes underlying spelling development.',
      'Conducted EEG recordings, coordinated participant assessments, and supported longitudinal data collection, entry, and quality control.',
    ],
  },
  {
    period: '2024 – 2025',
    html: 'Research Assistant, Depression Research Group, LMU University Hospital, Munich (Dr. Dr. Aline D. Scherff).',
    bullets: [
      'BioMD-Y biobank study examining genetic, hormonal, and environmental risk and protective factors associated with depression in youth.',
      'Managed biological samples and documentation; assisted with research grant preparation and submission.',
    ],
  },
  {
    period: '2022 – 2023',
    html: 'Research Assistant / Lab Coordinator, Experimental Lab for Economics and Social Sciences (MELESSA), LMU Munich (Dr. Andrej Woerner).',
    bullets: [
      'Organized and conducted large-scale computer-based experiments, including participant recruitment, session coordination, technical setup, and data quality monitoring.',
      'Supported interdisciplinary experimental research, collaborating with multiple research groups.',
    ],
  },
];

// Citations: her name is set in bold automatically (see src/components/Refs.astro).
export const publications = [
  {
    title: 'Investigating interpretation bias and stress responses as risk factors in children of parents with depression',
    authors: 'Frommelt, T., Bäumler, L., Rohleder, N., Bartosch, A., Schneider, L., Sumpf, C., Sfärlea, A., Schulte-Körne, G., & Platt, B.',
    venue: 'BMC Psychiatry, 26(1), 576 (2026)',
    href: '',
  },
  {
    title: 'Survivance as a framework for rethinking resilience with Indigenous youth',
    authors: 'Gone, J., Lai, J., Clément, E., Sumpf, C. L., & Burack, J. A.',
    venue: 'Development and Psychopathology (in press)',
    href: '',
  },
  {
    title: 'Evidence of Divergent Pathways to Similar Outcomes in Social Attention among Autistic and Nonautistic Youth',
    authors: 'Langille, L., Sumpf, C. L., Gazith, A., Stubbert, E., Tullo, Campbell, C., D., Bertone, A., & Burack, J. A.',
    venue: 'Journal of Autism and Developmental Disorders (submitted)',
    href: '',
  },
];

export const inPreparation = [
  'Sumpf, C. L., Stillitano, V., Wright, D., Hortuglu, T., Hai, T., & Burack, J. A. Indigenous social determinants of health: A culturally grounded approach in the Naskapi Nation.',
  'Sumpf, C. L., Stillitano, V., Lai, J., Boatswain-Jacques, A., O’Connor, R. M., Mushquash, C. J., Wendt, D. C., & Burack, J. A. Developmental trajectories of cultural connectedness and resilience among Indigenous youth.',
  'Sumpf, C. L., Cluett, R., & Hai, T. Understanding attention-deficit/hyperactivity disorder (ADHD) symptoms and neurobiology in youth through a social determinants of health framework.',
  'Bellon, O., Lai, J., Sumpf, C. L., Clément, E., Wendt, D. C., & Burack, J. A. Land-based programs and well-being in Indigenous youth from Canada: A scoping review.',
  'Rey, G., Sumpf, C. L., Escobar, K., Cohn, T., Hoste, A., & Burack, J. A. Autism in Indigenous communities in Canada: Community perspectives and priorities.',
  'Bellon, O., Sumpf, C. L., Boatswain-Jacques, A., Bisante, P., & Burack, J. A. A longitudinal study of cultural connectedness and behavior among First Nations youth.',
];

export const oralPresentations = [
  'Sumpf, C. L., Cluett, R., Jolin, A., Burack, J. A., & Hai, T. (2026, October). Age-related variation and sex-based comparisons in insular cortical thickness in youth [Power-pitch presentation]. International Society for Tractography, Banff, Canada.',
  'Cluett, R., Sumpf, C. L., Jolin, A., Burack, J. A., & Hai, T. (2026, October). Age and socioeconomic variation in rostral and caudal anterior cingulate cortex thickness in youth [Power-pitch presentation]. International Society for Tractography, Banff, Canada.',
  'Sumpf, C. L., Lai, J., & Burack, J. A. (2026, July 13). Predictors of student well-being and success—community collaborations [Workshop presentation]. Bridging Knowledge Systems: Addressing Social and Structural Determinants of Health Through Collaborative Dialogue, Montréal, Canada.',
  'Cluett, R. G., Sumpf, C. L., & Hai, T. (2026). Caregiver-reported social determinants in the ABCD Study: Developing economic and symbolic capital indices for developmental neuroimaging research [Symposium presentation]. 19th Canadian Neuroscience Meeting, Montréal, Canada.',
  'Sumpf, C. L., & Burack, J. A. (2026, February 2). Kawawachikamach–McGill Youth Study Team (MYST) collaborative overview [Workshop presentation]. Bridging Knowledge Systems, Montréal, Canada.',
  'Sumpf, C. L., Schneider, L., Bäumler, L., Rohleder, N., Schulte-Körne, G., Platt, B., & Frommelt, T. (2025, April 9). The association between cognitive biases and stress responses in children and adolescents with a parent suffering from depression [Symposium presentation]. German Psychotherapy Congress, Berlin, Germany.',
];

// Entries with a `poster` get a "Poster" link to the PDF in public/posters.
export type Ref = string | { text: string; poster?: string };

export const posterPresentations: Ref[] = [
  'Sumpf, C. L., Stillitano, V., Boatswain-Jacques, A., Lai, J., O’Connor, R. M., Mushquash, C. J., Wendt, D. C., & Burack, J. A. Cultural identity and resilience among Indigenous adolescents. Society for Research in Child Development, Atlanta, USA. [Submitted abstract.]',
  'Boatswain-Jacques, A., Knecht, L., Cohn, T., Sumpf, C. L., Stillitano, V., Pico, E., Bouma, A., Brodeur, D., Kelley, E., Iarocci, G., Russo, N., & Burack, J. A. Autism and autistic traits are associated with enhanced sensitivity to task-relevant probabilities in a correlated flanker. Society for Research in Child Development, Atlanta, USA. [Submitted abstract.]',
  { text: 'Sumpf, C. L., Cluett, R., & Hai, T. (2026, November 6). Understanding ADHD symptoms and neurobiology in youth through a social determinants of health framework [Poster]. Canadian ADHD Resource Alliance, Ottawa, Canada.', poster: '/posters/2026-caddra-adhd-sdoh.pdf' },
  { text: 'Sumpf, C. L., Cluett, R., Jolin, A., Burack, J. A., & Hai, T. (2026, October). Age-related variation and sex-based comparisons in insular cortical thickness in youth [Poster]. International Society for Tractography, Banff, Canada.', poster: '/posters/2026-ist-insular-cortical-thickness.pdf' },
  'Cluett, R., Sumpf, C. L., Jolin, A., Burack, J. A., & Hai, T. (2026, October). Age and socioeconomic variation in rostral and caudal anterior cingulate cortex thickness in youth [Poster]. International Society for Tractography, Banff, Canada.',
  'Sumpf, C. L., Ferraro, B., Donciu, L., Friedenberg, V., & Koestner, R. (2026, June 6). Investigating how cultural background and aspirations affect well-being among student sojourners [Poster]. Canadian Psychological Association, Montréal, Canada.',
  { text: 'Sumpf, C. L., Jolin, A., Hai, T., & Burack, J. A. (2026, June 6). Predicting academic functioning in youth using a social determinants of health framework [Poster]. Canadian Psychological Association, Montréal, Canada.', poster: '/posters/2026-cpa-academic-functioning-sdoh.pdf' },
  'Jolin, A., Cluett, R., Sumpf, C. L., Burack, J. A., & Hai, T. (2026, June 5). Association between parent and child attention skills in a community-based sample [Poster]. Canadian Psychological Association, Montréal, Canada.',
  { text: 'Sumpf, C. L., Stillitano, V., Wright, D., Hortuglu, T., Hai, T., & Burack, J. A. (2026, June 3). From risk to assets: A strengths-based developmental approach to Indigenous social determinants of health among Indigenous youth [Poster]. Canadian Developmental Psychology Conference, Montréal, Canada.', poster: '/posters/2026-cdpc-indigenous-sdoh.pdf' },
  { text: 'Sumpf, C. L., Stillitano, V., Lai, J., Boatswain-Jacques, A., O’Connor, R. M., Mushquash, C. J., Wendt, D. C., & Burack, J. A. (2026, May 28). Developmental trajectories of cultural connectedness and resilience among Indigenous youth [Poster]. Jean Piaget Society, Ottawa, Canada.', poster: '/posters/2026-jps-cultural-connectedness-resilience.pdf' },
  { text: 'Sumpf, C. L., Friedenberg, V., & Talwar, V. (2026, March 13). Racial differences in adolescent cyberbullying victimization: The moderating role of perceived school safety [Poster]. CRDH Conference, Montréal, Canada.', poster: '/posters/2026-crdh-cyberbullying-school-safety.pdf' },
  { text: 'Sumpf, C. L., Ginsberg, M., Langille, L., Gazith, A., Stubbert, E., Bertone, A., & Burack, J. A. (2025, November 14). Understanding the link between biological motion processing and social responsiveness in autism: A comparison between two measures [Poster]. SCERT Conference, Montréal, Canada.', poster: '/posters/2025-scert-biological-motion-autism.pdf' },
];

export const awardsTimeline: TimelineEntry[] = [
  { period: '2026', html: 'CADDRA Student Award, Canadian ADHD Resource Alliance.',
    bullets: ['Student conference award at the 2026 CADDRA ADHD Conference.'] },
  { period: '2026', html: 'Academic Excellence Award, Education Graduate Students’ Society, McGill University.',
    bullets: ['CA$750 · Merit-based recognition of graduate academic achievement.'] },
  { period: '2026', html: 'Best Poster Award, Centre for Research in Human Development Conference, Concordia University.' },
  { period: '2025', html: 'Canada First Research Excellence Fund (CFREF), McGill University.',
    bullets: ['CA$3,000 in research-related funding.'] },
  { period: '2025', html: 'Dean’s Loop Lab Award, McGill University.', bullets: ['CA$6,000 graduate award.'] },
  { period: '2025', html: 'Conference Presentation and Travel Grant, LMU Munich.',
    bullets: ['€400 to support academic conference presentation and travel.'] },
  { period: '2023 – 2024', html: 'Erasmus+ Mobility Scholarship, European Commission.',
    bullets: ['€2,210 in mobility support for the exchange semester at Maastricht University.'] },
  { period: '2021', html: 'Dr. Hans Riegel Award, Germany.', bullets: ['€200 academic distinction.'] },
];

export const teachingTimeline: TimelineEntry[] = [
  { period: '2026', html: 'Guest Lecturer, Graduate Human Development Course (EDPE 502), McGill University.',
    bullets: ['Delivered a graduate-level guest lecture on risk and resilience in human development, linking conceptual frameworks to developmental research.'] },
  { period: '2026 – 2027', html: 'Co-supervisor, Undergraduate Research Student, MYST Lab, McGill University.',
    bullets: [
      'Co-supervise an undergraduate student’s thesis, providing guidance and feedback on project development and research activities.',
      'Thesis: “The Mediating Role of Physical Appearance in the Relationship Between Family Support and Perceived Self-Efficacy in Peer Interactions”.',
    ] },
];

export const outreachTimeline: TimelineEntry[] = [
  { period: '2026', html: 'Community-Engaged Research Workshops: First Nations’ voices in research, Healthy Brains Healthy Lives, Montréal.',
    bullets: ['Co-organized knowledge translation workshops with First Nations communities on well-being, priorities for future research, and the inclusion of Indigenous voices in research.'] },
  { period: '2026', html: 'Expert Training Presentation: Neurodiversity in Schools, Center for Applied Policy Research (CAP) / Bavarian State Parliament.',
    bullets: ['Translated evidence on neurodiversity into implications for school environments, educators, and students.'] },
  { period: '2024 – now', html: 'Workshop Facilitator: Civic Education, Center for Applied Policy Research (CAP) / Bavarian State Parliament.',
    bullets: ['Facilitate interactive civic-education simulation workshops for high school students on democratic institutions, public policy, and state-level legislation.'] },
];

export const reviewingTimeline: TimelineEntry[] = [
  { period: '2026 – 2027', html: 'Journal Reviewer, MindPad, Student Journal of the Canadian Psychological Association.',
    bullets: ['Review student manuscripts with detailed written feedback and contribute to editorial decisions.'] },
  { period: '2026', html: 'Conference Abstract Reviewer, EGSS Conference, McGill University.' },
];

export const communityTimeline: TimelineEntry[] = [
  { period: '2026 – now', html: 'Vice-President, Student Life, Education Graduate Students’ Society (EGSS), McGill University.',
    bullets: ['Advocate for graduate students on non-academic matters and support students navigating disputes and disciplinary procedures.'] },
  { period: '2019 – now', html: 'Founding Member, Executive Board &amp; Treasurer, Grafing Goes Green e.V., Grafing.',
    bullets: ['Financial planning and legal matters for a nonprofit sustainability initiative; social-media outreach.'] },
  { period: '2025', html: 'Conference Volunteer, SCERT Conference, Montréal.' },
];

export const skills = [
  { group: 'Statistics', items: 'R, Stata, SPSS, Python' },
  { group: 'Neuroimaging', items: 'Structural MRI, cortical thickness (FreeSurfer, CBRAIN); diffusion MRI &amp; tractography (MRtrix3, DIPY, TractSeg, StarTrack, Trekker)' },
  { group: 'Experimental methods', items: 'EEG recording and processing, social attention tasks (BM, MOT), standardized cognitive assessments (SST), cortisol-based testing' },
  { group: 'Assessments', items: 'ADOS-2 (formal training, 2026), WIAT-4 Canadian, WASI-II, Trier Social Stress Test' },
  { group: 'Software', items: 'MAXQDA, Q-interactive, SoSci Survey, m-Path' },
  { group: 'Languages', items: 'German (native), English (fluent), French (intermediate), Italian (intermediate), Dutch (beginner)' },
];
