import axios from "axios";

interface CamperFilters {
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

const api = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export const fetchCampers = async (
  filters: CamperFilters,
  page: 1,
  perPage: 5,
) => {
  const params: Record<string, string | number> = { page, perPage };
  Object.entries(filters).forEach(([k, v]) => {
    if (v) params[k] = v;
  });
};
