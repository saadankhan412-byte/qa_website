import {
  Baby,
  BookOpen,
  Brain,
  CalendarDays,
  Clock,
  Gift,
  GraduationCap,
  Heart,
  Home,
  Lamp,
  Mic,
  Target,
  User,
  UserRound,
  type LucideProps,
} from "lucide-react";

const map = {
  book: BookOpen,
  mic: Mic,
  brain: Brain,
  child: Baby,
  female: UserRound,
  lamp: Lamp,
  gift: Gift,
  user: User,
  clock: Clock,
  home: Home,
  calendar: CalendarDays,
  graduation: GraduationCap,
  target: Target,
  heart: Heart,
};

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp aria-hidden {...props} />;
}
