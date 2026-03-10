const API_BASE = "http://localhost:3001/api";

export const getProfile = async () => {
  const res = await fetch(`${API_BASE}/profile`);
  return res.json();
};

export const getWorks = async () => {
  const res = await fetch(`${API_BASE}/works`);
  return res.json();
};

export const getSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`);
  return res.json();
};
