// Abstract pages (/research/abstracts/<slug>/), linked from the matching citation on the Research page.
// `cites` is a piece of the citation's title in profile.ts, used to attach the "Abstract" button.
// Titles, authors and affiliations follow the abstract document, which can differ from the CV citation.
export type Author = { name: string; aff: number[] };
export type Abstract = {
  slug: string;
  cites: string;
  title: string;
  authors: Author[];
  affiliations: string[];
  // Paragraphs; a paragraph may start with a bold label ("Purpose.").
  abstract: { label?: string; text: string }[];
};

export const abstracts: Abstract[] = [
  {
    slug: 'survivance-resilience-indigenous-youth',
    cites: 'Survivance as a framework for rethinking resilience',
    title: 'Survivance as a Framework for Rethinking Resilience with Indigenous Youth',
    authors: [
      { name: 'Joseph Gone', aff: [1, 2] }, { name: 'Jessica Lai', aff: [3] }, { name: 'Elsa Clément', aff: [4] },
      { name: 'Charlotte Sumpf', aff: [3] }, { name: 'Jacob A. Burack', aff: [3] },
    ],
    affiliations: [
      'Department of Anthropology, Harvard University',
      'Department of Global Health and Social Medicine, Harvard Medical School',
      'Department of Educational and Counselling Psychology, McGill University',
      'Department of Psychology, University of Victoria',
    ],
    abstract: [
      { text: 'Indigenous Peoples and youth across Turtle Island (generally referred to as the United States and Canada) have endured varied forms and degrees of colonial violence. Yet, their histories often include inspirational accounts of survival, resistance, cultural pride, and collective solidarity. In this article for the special issue on resilience honouring Suniya Luthar, we discuss resilience through three distinct approaches to illustrate the ways it has been and continues to be understood by Indigenous communities, studied academically, and reimagined by contemporary Indigenous activists and scholars. First, we present different community-specific perspectives and expressions of resilience highlighting that they are grounded in the distinct histories, values, and ways of life of specific communities. Second, we review empirical research from the academic tradition on the impact of the identification with, connections to, and participation in ancestral culture on resilience among Indigenous youth. Third, we highlight survivance, at the nexus of survival and resistance, as an emerging Indigenous framework that extends beyond mainstream notions of resilience. Grounded in community strengths, cultural continuity, intergenerational resistance, empowerment, and agency, survivance is especially relevant to Indigenous conceptualizations of well-being and to the historical, cultural, and structural contexts in which many Indigenous Peoples and youth live.' },
    ],
  },
  {
    slug: 'divergent-pathways-social-attention',
    cites: 'Evidence of Divergent Pathways to Similar Outcomes',
    title: 'Evidence of Divergent Pathways to Similar Outcomes in Social Attention among Autistic and Nonautistic Youth',
    authors: [
      { name: 'Luc Langille', aff: [1] }, { name: 'Charlotte L. Sumpf', aff: [1] }, { name: 'Adina Gazith', aff: [1] },
      { name: 'Emily Stubbert', aff: [1] }, { name: 'Colin Campbell', aff: [2] }, { name: 'Armando Bertone', aff: [1] },
      { name: 'Jacob A. Burack', aff: [1] },
    ],
    affiliations: [
      'Department of Educational and Counselling Psychology, McGill University, Montréal, Canada',
      'Department of Psychology, University of Prince Edward Island, Prince Edward Island, Canada',
    ],
    abstract: [
      { label: 'Purpose.', text: 'Given inconsistent findings regarding biological motion (BM) perception in autism, this study examined whether social and nonsocial attention rely on distinct cognitive mechanisms by comparing performance on social and non-social tasks, and its associations with IQ among autistic and nonautistic children and adolescents.' },
      { label: 'Methods.', text: 'Thirty-four autistic and 34 nonautistic participants aged 6 to 19 years, matched on nonverbal mental age (MA), completed a three-dimensional (3D) BM task (indicator of social attention) and a 3D multiple object tracking (MOT) task (indicator of non-social attention). Participants were grouped into childhood and adolescence using a median MA split. Associations between task performance and non-verbal IQ (Perceptual Reasoning Index [PRI] of the WASI-II) were examined among autistic and nonautistic participants.' },
      { label: 'Results.', text: 'BM thresholds did not differ between autistic and nonautistic groups and were higher in adolescence than in childhood for both groups. Within the autistic group, higher IQ was associated with better performance on the BM task; no such association was found among the nonautistic group. On the MOT task, nonautistic participants outperformed autistic participants in adolescence but not in childhood, and, performance was associated with PRI in both groups, and developmental periods differed significantly between groups.' },
      { label: 'Conclusion.', text: 'The findings are consistent with divergent developmental pathways for social attention, with autistic and nonautistic individuals relying on different cognitive mechanisms to achieve similar performance. In contrast, non-social attention appears to depend on shared cognitive mechanisms across groups, with group differences emerging in adolescence.' },
    ],
  },
  {
    slug: 'risk-to-assets-indigenous-social-determinants',
    cites: 'Indigenous social determinants of health: A culturally grounded approach',
    title: 'From Risk to Assets: A Strength-Based Developmental Approach to Indigenous Social Determinants of Health among Indigenous Youth',
    authors: [
      { name: 'Charlotte Luisa Sumpf', aff: [1] }, { name: 'Victoria Stillitano', aff: [1] }, { name: 'Deenah Wright', aff: [1] },
      { name: 'Turna Hortoglu', aff: [1] }, { name: 'Tasmia Hai', aff: [1, 2] }, { name: 'Jacob A. Burack', aff: [1] },
    ],
    affiliations: [
      'Educational and Counselling Psychology, McGill University',
      'Department of Psychology, University of Manitoba',
    ],
    abstract: [
      { text: 'The present study synthesizes nearly three decades of community-engaged developmental research conducted in partnership with the Naskapi Nation of Kawawachikamach in Northern Quebec. Adopting a strengths-based approach, we examine culturally grounded Indigenous determinants of health as promotive processes in youth development and situate these community-specific determinants within multilevel Indigenous Social Determinants of Health (ISDOH) frameworks. In doing so, we aim to advance the theoretical integration of Indigenous perspectives on health and well-being with developmental psychopathology. Drawing on findings from multiple studies examining aggression, internalizing symptoms, substance use, academic achievement, and peer relations, we synthesize evidence on the cultural, relational, and community-based factors associated with youth development. Across studies, findings indicate a consistent pattern in which cultural connectedness and supportive relationships are associated with more positive developmental outcomes. These findings highlight the importance of understanding Indigenous youth development within the broader historical, cultural, and relational contexts in which it unfolds. By integrating community-specific evidence with ISDOH and developmental frameworks, this paper advances a strengths-based, multilevel understanding of Indigenous youth well-being that recognizes cultural continuity, kinship, and community connections as fundamental developmental resources. Furthermore, the synthesis underscores the value of sustained, community-engaged research partnerships in advancing developmental theory while recognizing Indigenous communities as active contributors to the production of knowledge about youth development and well-being.' },
    ],
  },
  {
    slug: 'cultural-identity-resilience-indigenous-adolescents',
    cites: 'Developmental trajectories of cultural connectedness and resilience',
    title: 'Cultural Identity and Resilience Among Indigenous Adolescents',
    authors: [
      { name: 'Sumpf, C.', aff: [1] }, { name: 'Stillitano, V.', aff: [1] }, { name: 'Lai, J.', aff: [1] },
      { name: 'Boatswain-Jacques, A-F.', aff: [1] }, { name: 'O’Connor, R. M.', aff: [2] }, { name: 'Mushquash, C. J.', aff: [3] },
      { name: 'Wendt, D. C.', aff: [1] }, { name: 'Burack, J. A.', aff: [1] },
    ],
    affiliations: [
      'McGill University, Department of Educational & Counselling Psychology',
      'Concordia University, Department of Psychology',
      'Lakehead University, Department of Psychology',
    ],
    abstract: [
      { text: 'Connections to ancestral culture have often been linked with well-being and better mental health among Indigenous youth (Chandler & Lalonde, 1998, 2009; Kirmayer, 2011). Given the positive outcomes associated with identification with ancestral culture, cultural identity has been widely proposed as a source of resilience among Indigenous youth (Burack et al., 2021, 2024; Hatala et al., 2017; Sasakamoose et al., 2016; Snowshoe et al., 2017). In the present study, we examined patterns of cultural identity in Indigenous adolescents and its associations with resilience. 134 students from a First Nations community completed the cultural identification subscale of the Cultural Connectedness Scale (Snowshoe et al., 2015) and the Child and Youth Resilience Measure-Revised (Ungar & Liebenberg, 2011) used to assess the individual, caregiver, and contextual domains of resilience.' },
      { text: 'Multilevel growth curve models indicated that cultural identity followed a quadratic model across age groups (early adolescence = 11-13 years; middle adolescence = 14-16 years; and late adolescences = 17-21 years), with decreases in cultural identity throughout later adolescence. This nonlinear pattern suggests that cultural identity may not develop uniformly across adolescence but may become decreasingly salient as youth progress through later developmental stages. The three domains of resilience positively predicted participants’ cultural identity intercepts, as the adolescents with higher individual (b = .387, p < .001), caregiver (b = .408, p < .001), and contextual resilience (b = .463, p < .001) experienced an initial boost in their cultural identity in early adolescence that was maintained with age.' },
      { text: 'These findings are further support for the notion that cultural identity follows a nonlinear developmental trajectory, with particularly pronounced decreases during later adolescence. Concordantly, the finding of associations between the scores on the measure of cultural identity and all 3 domains of individual, caregiver, and contextual resilience extends the evidence of the essential role of identification with ancestral culture in the well-being and mental health of Indigenous youth.' },
    ],
  },
  {
    slug: 'land-based-programs-scoping-review',
    cites: 'Land-based programs and well-being in Indigenous youth',
    title: 'Land-Based Programs and Well-Being in Indigenous Youth from Canada: A Scoping Review',
    authors: [
      { name: 'Bellon, O.', aff: [1] }, { name: 'Lai, J.', aff: [1] }, { name: 'Sumpf, C.', aff: [1] },
      { name: 'Clement, E.', aff: [2] }, { name: 'Burack, J. A.', aff: [1] }, { name: 'Wendt, C. D.', aff: [1] },
    ],
    affiliations: [
      'Educational and Counselling Psychology, McGill University',
      'Department of Psychology, University of Victoria',
    ],
    abstract: [
      { text: 'Despite a growing interest in land-based programs as a promoter of resilience and well-being in Indigenous youth, further research is needed to explore its impact across the spectrum of well-being outcomes. The initial research on the impact of land-based healing on youth mental health shows that land-based healing is associated with positive changes in identity, belonging, and with an increased spiritual and cultural well-being in its participants, fostering cultural continuity. Following the Etuaptmumk/Two-Eyed Seeing perspective, a scoping review of mixed-methods, quantitative, and qualitative studies was conducted to explore the impact of land-based educational and healing programs on the emotional, spiritual, and mental well-being of Indigenous youth living in Canada. Without restricting publication year, 17 studies across five databases were included in the present review. Outcomes pertaining to emotional, spiritual, physical, and mental well-being were examined. Overall, studies found land-based programs to increase participants’ spiritual, mental, and emotional health in a way that is best understood as holistic. Patterns of limitations of the literature included small sample sizes, reliance on self-selection and self-report measures, lack of culturally-relevant tools and longitudinal follow-up. In terms of future directions, the literature suggests a broadening of the scope of research on land-based programs, with the goal of embedding land-based programs in education and health services, and policy. An emphasis was also placed on the importance of community-driven research and culturally-grounded measurement tools. Together, this review’s findings offer an overview of the current state of research on the beneficial effect of land-based programs on Indigenous youth well-being.' },
    ],
  },
  {
    slug: 'cultural-connectedness-behavior-first-nations-youth',
    cites: 'A longitudinal study of cultural connectedness and behavior',
    title: 'A Longitudinal Study of Cultural Connectedness and Behavior among First Nations Youth',
    authors: [
      { name: 'Océane Bellon', aff: [1] }, { name: 'Charlotte Sumpf', aff: [1] }, { name: 'Pamela Bisante', aff: [1] },
      { name: 'Jacob A. Burack', aff: [1] },
    ],
    affiliations: ['Educational and Counselling Psychology, McGill University'],
    abstract: [
      { text: 'Indigenous youth have continuously displayed resilience through their ability to lead fulfilling lives (Blacklock et al., 2020). Cultural connectedness, defined as engagement with, and knowledge of ancestral culture (Snowshoe et al., 2017), has emerged as an important predictor of resilience for Indigenous youth (LaFromboise et al., 2006; 2007). It has been found to be protective against suicidality, substance abuse and depression, and to be strongly associated with overall well-being and positive functioning (Chandler & Lalonde, 1998; Snowshoe et al., 2015; Whitbeck et al., 2004). The goal of this study was to explore the role of cultural connectedness in the developmental trajectories of internalizing and externalizing behaviors in First Nations adolescents from a community in northern Quebec. A hundred and thirty-eight students (60 males) aged 12-19 years completed self-report questionnaires measuring cultural connectedness (Snowshoe et al., 2015) and internalizing/externalizing behaviors (Achenbach, 2001) over a four year period. Multilevel linear growth curves modelled changes in problem behaviors across four age points. Overall, the severity of self-reported internalizing behaviors significantly decreased across adolescence, whereas the severity of externalizing behaviors did not. Additionally, the girls reported significantly more severe problem behaviors across adolescence than boys. None of the three dimensions of cultural connectedness significantly predicted changes in problem behaviors across adolescence, suggesting that other variables not factored in this study contributed to changes in problem behaviors across gender and adolescence. Future research should aim to develop and integrate Indigenous measures of well-being.' },
    ],
  },
];

export const abstractUrl = (a: Abstract) => `/research/abstracts/${a.slug}/`;
export const abstractFor = (citation: string) => abstracts.find((a) => citation.includes(a.cites));
