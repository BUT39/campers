export type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";
export type Forms = "alcove" | "panel_van" | "integrated" | "semi_integrated";
export type Transmissions = "automatic" | "manual";
export type Engines = "diesel" | "petrol" | "hybrid" | "electric";

export interface CamperListItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: Forms;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmissions;
  engine: Engines;
  amenities: Amenity[];
  coverImage: string;
  totalReviews: number;
}
export interface CamperListResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
}
