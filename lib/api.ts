import axios from "axios";

import type {
  CamperListResponse,
  Forms,
  Transmissions,
  Engines,
} from "@/types/camper";

interface CamperFilters {
  location?: string;
  form?: Forms;
  transmission?: Transmissions;
  engine?: Engines;
}

const api = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export const fetchCampers = async (
  filters: CamperFilters,
  page = 1,
  perPage = 4,
): Promise<CamperListResponse> => {
  const params: Record<string, string | number> = { page, perPage };
  Object.entries(filters).forEach(([k, v]) => {
    if (v) params[k] = v;
  });
  const { data } = await api.get<CamperListResponse>("/campers", { params });
  return data;
};
