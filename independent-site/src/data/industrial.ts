export type IndustrialProject = {
  slug: string;
  title: string;
  year: string;
  featured?: boolean;
  eyebrow: string;
  statement: string;
  overview: string;
  challenge: string;
  outcome: string;
  hero: string;
  heroVideo?: string;
  cardImage?: string;
  storyVisual?: string;
  renders: string[];
  prototypes: string[];
};

const media = (id: string) => `https://static.wixstatic.com/media/${id}`;

export const industrialProjects: IndustrialProject[] = [
  {
    slug: 'aero', title: 'AERO', year: '2017', featured: true, eyebrow: 'PERSONAL COOLING · PRODUCT DESIGN',
    statement: 'A hands-free way to find relief in the heat.',
    overview: 'AERO is a portable cooling accessory for commuters. The design directs cooling at the neck, making relief more immediate and less intrusive than a handheld fan.',
    challenge: 'Create a compact wearable that makes urban heat feel manageable without adding friction to a commute.',
    outcome: 'A functional prototype brought the battery, motor and cooling hardware into a 3D-printed form that could be worn and tested in context.',
    hero: media('97a2bb_45ed5f1962c44fd9a3363fc89e58ce7a~mv2.jpg'),
    heroVideo: 'https://video.wixstatic.com/video/97a2bb_21c1322a9f6845fa9a733eee4cf66bb6/1080p/mp4/file.mp4',
    cardImage: media('97a2bb_da88267929964101adea6f7c60f6551e~mv2.jpg'),
    renders: [media('97a2bb_45ed5f1962c44fd9a3363fc89e58ce7a~mv2.jpg'), media('97a2bb_0eaad128bed64119a721d672db77387f~mv2_d_3508_2480_s_4_2.jpg')],
    prototypes: [media('97a2bb_d5266911a32d4c5581bb2dab0e4a89c4~mv2.jpg'), media('97a2bb_3031c1ad1a47462e8f04f227232573e1~mv2.jpg'), media('97a2bb_d3d0c8db460243d6b158e4c9fab75b60~mv2.jpg'), media('97a2bb_85c6d3a6b14241a58960d5f7d9efdca7~mv2.jpg')],
  },
  {
    slug: 'qiq-mobility', title: 'QIQ Mobility', year: '2019—20', featured: true, eyebrow: 'MICROMOBILITY · SYSTEM DESIGN',
    statement: 'A flexible docking ecosystem for shared electric transport.',
    overview: 'QIQ Mobility rethinks the charging station as adaptable public infrastructure for shared electric vehicles.',
    challenge: 'Make charging and locking feel seamless while allowing stations to adapt to the public space around them.',
    outcome: 'The work progressed from scalable station concepts and connection mechanics to full-scale prototypes used to test handling and user experience.',
    hero: media('97a2bb_d292c80a280f45168a2e6ddf4aae1860~mv2.jpg'),
    cardImage: media('97a2bb_66dd921fddc647a9a89a9b435c37b346~mv2.jpg'),
    renders: [media('97a2bb_a45418111b914608832a39032367139c~mv2.jpg'), media('97a2bb_dd42618382224521a60431f5778c8484~mv2.jpg'), media('97a2bb_bf73522510764818a45bbaef381c40b7~mv2.jpg'), media('97a2bb_919dcf54340e4c0b9fa830377f8c2fc2~mv2.jpg'), media('97a2bb_a0fd5ab7ebf748e9b41d7dd741810c1c~mv2.jpg'), media('97a2bb_66dd921fddc647a9a89a9b435c37b346~mv2.jpg'), media('97a2bb_202e9372c1864cd29e537783678772ae~mv2.jpg'), media('97a2bb_5edbb820318048889a2396ae7ed17735~mv2.png'), media('97a2bb_c5a6d1b6285c4095977c43ffe1d72f3b~mv2.gif'), media('97a2bb_4f33d6ed43e740ee85c625c107862105~mv2.jpg')],
    prototypes: [media('97a2bb_647068bdc8654dcf9f2014e69190c4c5~mv2.jpg'), media('97a2bb_2a63cae5d497427fbef886dcd950a78d~mv2.jpg'), media('97a2bb_48c6f4c36f25415288a14c6c0a3076ad~mv2.jpeg'), media('97a2bb_3b4f2cd8ed1e4e8fbed9c816bf6ce755~mv2.jpeg')],
  },
  {
    slug: 'qiq-pod', title: 'QIQ Pod', year: '2020', featured: true, eyebrow: 'FUTURE MOBILITY · VEHICLE DESIGN',
    statement: 'A last-mile vehicle designed around flexible transfer.',
    overview: 'QIQ Pod is a concept for a more sustainable integrated transportation system, providing commuters with a comfortable last-mile option in dense urban cities.',
    challenge: 'Imagine a shared vehicle that can fit naturally into a wider system of transfer, charging and public transport.',
    outcome: 'The concept brings a semi-autonomous, self-parking electric vehicle into the QIQ transport ecosystem.',
    hero: media('97a2bb_30a2c97a232647328d3c3e5b7f978aff~mv2.png'),
    cardImage: media('97a2bb_94d0e800f2bc472ebb0532dd5f2a20bd~mv2.jpg'),
    renders: [media('97a2bb_30a2c97a232647328d3c3e5b7f978aff~mv2.png'), media('97a2bb_61ec47dc0f874d5dbdb81784840a2acd~mv2.png'), media('97a2bb_136c0d396f2c480291f8b20ed5d9f42b~mv2.jpg'), media('97a2bb_efc1b221211544b994b4d32f9021ba95~mv2.jpg')],
    prototypes: [],
  },
  {
    slug: 'steamway', title: 'Steamway', year: '2017', eyebrow: 'HOME APPLIANCE · CIRCULAR DESIGN',
    statement: 'A dishwasher designed for small, water-conscious homes.',
    overview: 'Steamway uses steam, reusable filters and removable dish baskets to reduce dependence on a fixed water connection and bring more flexibility to compact kitchens.',
    challenge: 'Design an appliance that saves water while also making the chores around washing, storing and organising dishes feel more intuitive.',
    outcome: 'A basket-based system turns loading, washing and putting dishes away into one continuous ritual.',
    hero: media('97a2bb_7e3cf03d75e944e9b5eeae790d85d489~mv2_d_1920_1358_s_2.jpg'),
    renders: [media('97a2bb_7e3cf03d75e944e9b5eeae790d85d489~mv2_d_1920_1358_s_2.jpg'), media('97a2bb_71bca91cbbad4430b1b08d94554f6e9a~mv2.jpg'), media('97a2bb_73ebcb214e434ad287f8ea98c528915a~mv2.jpg'), media('97a2bb_95b1f856f0cf4358a953fb831d44784b~mv2.jpg')],
    prototypes: [],
  },
  {
    slug: 'bonfire', title: 'Bonfire', year: '2017', eyebrow: 'LIGHTING · MATERIAL EXPLORATION',
    statement: 'A warm light made from a difficult waste stream.',
    overview: 'Bonfire reforms recycled plastic straws into a luminous, flame-like lamp. A simple material intervention turns a disposable item into a lasting object.',
    challenge: 'Use an everyday waste material without concealing its origin or compromising the object’s eventual recyclability.',
    outcome: 'The lamp uses only a wooden base, light diffuser and reformed straws—no glue or paint—so the components can be separated at end of life.',
    hero: media('97a2bb_3022b3b8c667480296caf267df8da190~mv2.jpg'),
    renders: [media('97a2bb_3022b3b8c667480296caf267df8da190~mv2.jpg'), media('97a2bb_0d827d1a4ff34714a7b50e4cf2a34011~mv2.jpg')],
    prototypes: [],
  },
  {
    slug: 'atlas-80', title: 'ATLAS 80', year: '2017', eyebrow: 'AUTONOMY · ROBOTICS',
    statement: 'A logistics robot with a deliberately approachable character.',
    overview: 'ATLAS 80 is an autonomous logistics robot developed to move goods efficiently through a working environment.',
    challenge: 'Integrate the mechanical and electronic complexity required for autonomous navigation without making the vehicle feel intimidating to people around it.',
    outcome: 'The design conceals the technical systems in a compact, friendly body—nicknamed “The Rat”—while retaining the sensing needed for safe obstacle navigation.',
    hero: media('97a2bb_95a7aacf7df14ad69457b9eee7a0ecea~mv2.gif'),
    cardImage: media('97a2bb_78fba6d9ef314b12a6f918046ceb4e48~mv2.jpg'),
    renders: [media('97a2bb_4e4c15893a754949a43d3ef1b8dca89d~mv2.jpg'), media('97a2bb_0c309c649ad24dbbb4247dfacc9877bc~mv2_d_2560_1811_s_2.jpg'), media('97a2bb_ecccacc392f44103a59aec48c27de29b~mv2.jpg')],
    prototypes: [],
  },
  {
    slug: 'dream-maker', title: 'Dream Maker', year: '2021', eyebrow: 'WELLBEING · SPECULATIVE PRODUCT',
    statement: 'A sleep environment that responds to the rhythm of rest.',
    overview: 'Dream Maker explores a calmer bedtime routine through light, sound and scent. Its AI-enabled concept responds to stages of sleep rather than competing for attention.',
    challenge: 'Create an expressive object that counters the pull of screens and makes a healthier sleep ritual feel desirable.',
    outcome: 'A soft cloud-like form diffuses emissive light and brings a calm, otherworldly presence to the room.',
    hero: media('97a2bb_545f19fc518a4ad6b4866ba0d8a6de35~mv2.jpg'),
    storyVisual: media('97a2bb_da5b6d1d603943fda52a2ee56ee89641~mv2.gif'),
    renders: [media('97a2bb_545f19fc518a4ad6b4866ba0d8a6de35~mv2.jpg'), media('97a2bb_e32b656b57b240ecace34296f4dcac12~mv2.jpg'), media('97a2bb_95d7f7f59f444075854d686931396e15f003.jpg'), media('97a2bb_8f88926440b44ceba7516b7623a29532~mv2.jpg')],
    prototypes: [],
  },
  {
    slug: 'wattbike', title: 'WATTBIKE', year: '2020', eyebrow: 'URBAN SYSTEM · MICROMOBILITY',
    statement: 'A bicycle-sharing station built into the commute.',
    overview: 'WATTBIKE turns the bus shelter into a shared bicycle hub, bringing solar charging, secure parking and service touchpoints into existing urban infrastructure.',
    challenge: 'Address bicycle clutter, maintenance and limited public space without asking cities to add another dedicated station footprint.',
    outcome: 'The solar-tracking canopy and integrated docking system make the shelter an active piece of transport infrastructure.',
    hero: media('97a2bb_13aa5eccb7854e9c9115b2584e17b5ca~mv2.jpg'),
    heroVideo: 'https://video.wixstatic.com/video/97a2bb_826093e6a9694843aa080aef285140fa/1080p/mp4/file.mp4',
    cardImage: media('97a2bb_13aa5eccb7854e9c9115b2584e17b5ca~mv2.jpg'),
    renders: [media('97a2bb_485ea15636d84fddb655761f920ea092~mv2.png'), media('97a2bb_874c7a760d0c449db9e99c5637c2805a~mv2.jpg'), media('97a2bb_ae77c5d28655489bb24b8dc20fd9bc41~mv2.png'), media('97a2bb_c30971a737dd4e3d86a14b0a7d658825~mv2.jpg'), media('97a2bb_ffefb5acf61f4b8881882f6820d8abc8~mv2.jpg'), media('97a2bb_c921dbc7619f4db78ca83e8c9f7076c5~mv2.png'), media('97a2bb_5c2575f962644ec89eaeebcda648607f~mv2.png'), media('97a2bb_a58cb761a4ad4eaf8f1870925bfbd0f6~mv2.png'), media('97a2bb_3ed99529d85346f2b1abd40dbe76ebce~mv2.png'), media('97a2bb_98ebd00bcb6e4312bafb46828201daf1~mv2.jpg'), media('97a2bb_b97e294ee76b4915a7a1f9e1d783f355~mv2.png')],
    prototypes: [],
  },
  {
    slug: 'economy-butler', title: 'Economy Butler', year: '2020', eyebrow: 'AVIATION · SERVICE SYSTEM',
    statement: 'A safer, more autonomous meal service for economy cabins.',
    overview: 'Economy Butler prepares, serves and collects airline meal boxes autonomously, reducing manual food handling and improving use of the galley and aisle.',
    challenge: 'Rethink meal service for an aircraft cabin with high touchpoints, limited space and a need for less reliance on crew during service.',
    outcome: 'A coordinated system of galley parking, mobile management, stacked meal boxes and autonomous carts forms a complete food-service loop.',
    hero: media('97a2bb_7dfcc1f03c854f0db2714d7ffe51e574~mv2.jpg'),
    renders: [media('97a2bb_7dfcc1f03c854f0db2714d7ffe51e574~mv2.jpg'), media('97a2bb_48e1568661f5440096d5ada5bf5a4932~mv2.jpg'), media('97a2bb_eca85a27d8384ac69da346af57f62140~mv2.jpg'), media('97a2bb_05ab87f56af94603b6f033d80f18acfc~mv2.jpg')],
    prototypes: [],
  },
];

export const getIndustrialProject = (slug: string) => industrialProjects.find((project) => project.slug === slug) || industrialProjects[0];
