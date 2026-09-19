export const site = {
  name: "Quran Education Academy",
  phoneRaw: "03187779954",
  phoneIntl: "+923187779954",
  phoneDisplay: "+92 318 7779954",
  email: "quraaneducationacademy@gmail.com",
  instagram: "https://www.instagram.com/quraanedu/",
  facebook: "https://www.facebook.com/quraaneducationacademy",
  whatsappMessage:
    "Assalamualaikum, I am interested in the 3-day free trial at Quran Education Academy.",
  description:
    "Online Quran learning designed to make Quran education accessible, convenient, and personalized.",
};

export const whatsappUrl = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.phoneIntl.replace("+", "")}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Packages", to: "/packages" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export type CourseIcon = "book" | "mic" | "brain" | "child" | "female" | "lamp";

export interface Course {
  slug: string;
  number: string;
  icon: CourseIcon;
  title: string;
  short: string;
  intro: string;
  learn: string[];
  audience: string[];
  approach: string;
  benefits: string[];
}

export const courses: Course[] = [
  {
    slug: "basic-quran-reading",
    number: "01",
    icon: "book",
    title: "Basic Quran Reading",
    short:
      "A beginner-friendly course for young learners with little or no previous Quran education. Students begin with Noorani Qaida and gradually develop the ability to recognize Arabic letters, words, and read the Quran correctly.",
    intro:
      "Basic Quran Reading is designed for learners who are starting from the very beginning. Through Noorani Qaida, students become familiar with the Arabic alphabet, learn how letters join and sound, and steadily build the confidence to read directly from the Quran.",
    learn: [
      "Recognition of Arabic letters and their shapes",
      "Correct pronunciation of individual letters and sounds",
      "Joining letters into words using Noorani Qaida",
      "Reading short words and phrases with growing fluency",
      "Moving step by step towards reading from the Quran",
    ],
    audience: [
      "Children beginning their Quran education",
      "Learners with little or no previous Quran reading experience",
      "Adults who would like to start reading the Quran from the basics",
    ],
    approach:
      "Lessons are delivered one-to-one in live online sessions. The tutor introduces each lesson at a comfortable pace, listens to the student read, and corrects gently as they progress. Regular revision helps students retain what they have learned before moving forward.",
    benefits: [
      "A clear starting point for complete beginners",
      "Individual attention in every class",
      "Steady, structured progress from letters to Quran reading",
      "Flexible timings that fit around school and family routines",
    ],
  },
  {
    slug: "quran-with-tajweed",
    number: "02",
    icon: "mic",
    title: "Quran With Tajweed",
    short:
      "Learn to recite the Quran with correct pronunciation and Tajweed rules under the guidance of qualified online tutors.",
    intro:
      "Quran With Tajweed helps students recite the Quran the way it is meant to be recited. The course focuses on accurate pronunciation, the articulation points of letters, and the practical application of Tajweed rules during recitation.",
    learn: [
      "Articulation points (Makharij) of the Arabic letters",
      "Characteristics of letters and how they affect sound",
      "Core Tajweed rules applied during recitation",
      "Improving fluency and rhythm while reading",
      "Listening and correction practice with the tutor",
    ],
    audience: [
      "Students who can already read the Quran and want to improve recitation",
      "Learners who wish to correct long-standing pronunciation habits",
      "Children and adults at beginner to intermediate Tajweed levels",
    ],
    approach:
      "Each session combines short explanations of Tajweed rules with guided recitation. The tutor listens closely, points out areas to improve, and demonstrates the correct sound so students can hear and repeat it. Progress is built through consistent practice.",
    benefits: [
      "Recite with greater accuracy and confidence",
      "Immediate feedback in live one-to-one classes",
      "A practical, recitation-focused approach to Tajweed",
      "Learn at a pace that suits your current level",
    ],
  },
  {
    slug: "quran-memorization",
    number: "03",
    icon: "brain",
    title: "Quran Memorization",
    short:
      "A structured online learning program for students who want to memorize the Quran with consistent guidance and supervision from skilled tutors.",
    intro:
      "Quran Memorization (Hifz) is a structured program for students who wish to commit the Quran, or selected portions of it, to memory. With regular sessions and consistent supervision, students build a routine of new memorization and careful revision.",
    learn: [
      "Techniques for memorizing new portions effectively",
      "A revision routine to strengthen what has been memorized",
      "Recitation of memorized portions with attention to accuracy",
      "Building consistency and discipline in daily practice",
    ],
    audience: [
      "Students aiming to memorize the complete Quran",
      "Learners who wish to memorize selected Surahs or Juz",
      "Children and adults who can already read the Quran",
    ],
    approach:
      "Students recite newly memorized portions to their tutor in each session, followed by revision of previous lessons. The tutor tracks progress, adjusts the daily target to the student's capacity, and provides encouragement throughout the journey.",
    benefits: [
      "Consistent supervision and accountability",
      "Memorization targets adapted to the individual student",
      "Balanced focus on new lessons and revision",
      "Learn from home without disrupting daily routines",
    ],
  },
  {
    slug: "quran-courses-for-kids",
    number: "04",
    icon: "child",
    title: "Quran Courses for Kids",
    short:
      "Personalized one-to-one Quran learning for children from the comfort of home, with flexible schedules that fit family routines.",
    intro:
      "Quran Courses for Kids bring Quran learning into your home in a way that is friendly, engaging, and personal. Children learn one-to-one with a tutor who adapts each lesson to their age, level, and attention span.",
    learn: [
      "Quran reading from the basics, starting with Noorani Qaida where needed",
      "Correct pronunciation and early Tajweed awareness",
      "Short Surahs and everyday supplications",
      "Foundational Islamic concepts suitable for children",
    ],
    audience: [
      "Children beginning their Quran education",
      "Kids who need extra individual attention to progress",
      "Families looking for a convenient home-based learning option",
    ],
    approach:
      "Sessions are kept interactive and encouraging. Tutors use repetition, gentle correction, and positive reinforcement to keep children motivated. Parents are welcome to stay involved and follow their child's progress.",
    benefits: [
      "One-to-one attention tailored to each child",
      "Timings that fit around school and family life",
      "A safe, comfortable learning environment at home",
      "Steady progress at a pace that suits the child",
    ],
  },
  {
    slug: "quran-courses-for-females",
    number: "05",
    icon: "female",
    title: "Quran Courses for Females",
    short:
      "Online Quran learning for women and girls with access to female tutors and a convenient home-based learning environment.",
    intro:
      "Quran Courses for Females offer women and girls the opportunity to learn the Quran with female tutors in a comfortable, private, home-based setting. Courses can be tailored to reading, Tajweed, memorization, or Islamic concepts.",
    learn: [
      "Quran reading and recitation according to the student's level",
      "Tajweed rules applied through guided practice",
      "Memorization support for selected portions or the full Quran",
      "Essential Islamic knowledge for daily life",
    ],
    audience: [
      "Women who wish to begin or continue Quran learning",
      "Girls who prefer learning with a female tutor",
      "Busy mothers and professionals who need flexible timings",
    ],
    approach:
      "Classes are one-to-one and scheduled around the student's availability. Female tutors guide each lesson patiently, with a focus on creating a respectful and encouraging learning environment.",
    benefits: [
      "Access to female tutors",
      "Privacy and comfort of learning from home",
      "Flexible timings for busy schedules",
      "Personalized lessons across reading, Tajweed, and memorization",
    ],
  },
  {
    slug: "islamic-concepts",
    number: "06",
    icon: "lamp",
    title: "Learn Islamic Concepts",
    short:
      "Build a stronger foundation in essential Islamic concepts and knowledge through structured online learning.",
    intro:
      "Learn Islamic Concepts is designed to help students of all ages understand the essentials of their faith in a clear and structured way, complementing their Quran studies with practical knowledge.",
    learn: [
      "Foundational beliefs and pillars of Islam",
      "Everyday acts of worship and how to perform them",
      "Manners, character, and daily supplications",
      "Age-appropriate discussion of key Islamic topics",
    ],
    audience: [
      "Children building a foundation in Islamic knowledge",
      "Adults who wish to strengthen their understanding",
      "Students combining Islamic studies with Quran learning",
    ],
    approach:
      "Lessons are delivered through conversation and explanation in live one-to-one sessions. Topics are introduced progressively, with time for questions so students understand and can apply what they learn.",
    benefits: [
      "Clear explanations suited to the student's age and level",
      "Practical knowledge for daily life",
      "A structured path through essential topics",
      "Flexible online sessions from home",
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const trustItems = [
  { title: "3-Day Free Trial", text: "Start before committing", icon: "gift" },
  { title: "1-to-1 Classes", text: "Personalized learning", icon: "user" },
  { title: "Flexible Timings", text: "Learn around your schedule", icon: "clock" },
  { title: "Online Learning", text: "Learn from home", icon: "home" },
] as const;

export const benefits = [
  {
    title: "One-to-One Learning",
    text: "Give students individual attention during their online classes.",
    icon: "user",
  },
  {
    title: "Flexible Scheduling",
    text: "Choose suitable learning times around your daily routine.",
    icon: "calendar",
  },
  {
    title: "Learn From Home",
    text: "Study the Quran from the comfort of your home.",
    icon: "home",
  },
  {
    title: "Qualified Tutors",
    text: "Learn with tutors who guide each lesson patiently and attentively.",
    icon: "graduation",
  },
  {
    title: "Personalized Learning",
    text: "Structure learning around the student's level and goals.",
    icon: "target",
  },
  {
    title: "Supportive Learning Environment",
    text: "Create a comfortable and encouraging learning experience for students.",
    icon: "heart",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Register",
    text: "Submit your basic information and tell us which course interests you.",
  },
  {
    number: "02",
    title: "Choose Your Schedule",
    text: "Discuss suitable days and timings for your classes.",
  },
  {
    number: "03",
    title: "Start Learning",
    text: "Begin your personalized Quran learning journey online.",
  },
] as const;

export interface PricingPlan {
  name: string;
  classesPerWeek: number;
  classesPerMonth: number;
  sessionDuration: string;
  /** Leave undefined until the client confirms pricing. */
  price?: { amount: string; period: string };
  highlight?: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    classesPerWeek: 2,
    classesPerMonth: 8,
    sessionDuration: "30 minutes",
    features: [
      "One-to-one live classes",
      "Flexible day and time selection",
      "Suitable for beginners and revision",
    ],
  },
  {
    name: "Regular",
    classesPerWeek: 3,
    classesPerMonth: 12,
    sessionDuration: "30 minutes",
    highlight: true,
    features: [
      "One-to-one live classes",
      "Flexible day and time selection",
      "Balanced pace for steady progress",
    ],
  },
  {
    name: "Intensive",
    classesPerWeek: 5,
    classesPerMonth: 20,
    sessionDuration: "30 minutes",
    features: [
      "One-to-one live classes",
      "Flexible day and time selection",
      "Ideal for memorization and faster progress",
    ],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  location?: string;
  photo?: string;
}

/** Populate with verified testimonials supplied by the academy. */
export const testimonials: Testimonial[] = [];

export const preferredDays = [
  "Monday to Friday",
  "Weekends only",
  "Alternate days",
  "Flexible / Any days",
];

export const preferredTimes = ["Morning", "Afternoon", "Evening", "Night", "Flexible"];
