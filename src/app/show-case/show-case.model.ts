export interface Course {
  courseId: string;
  extId: string;
  courseHash: string;
  title: string;
  grade: string;
  genre: string;
  subject: string;
  itunes_id: string;
  progress: number;
  description: string;
  status: string;
  price: string;
  shopUrl: string;
  google_id: string;
  winstore_id: string;
  isNew: boolean;
  priceBonus: number;
  lang: string;
  size: number;
  requireUpdate: boolean;
}

export interface Filter {
  subject: string;
  genre: string;
  grade: string;
  query: string;
}
