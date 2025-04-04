export interface Participant {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  image?: string;
  timestamp: number;
}

export interface ChatSettings {
  headerTitle: string;
  dayLabel: string;
  backgroundColor: string;
}
