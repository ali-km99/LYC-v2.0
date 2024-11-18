export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface PhotoGroup {
  id: string;
  title: string;
  courseInfo: string;
  photos: Photo[];
}