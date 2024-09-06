export const Base_URL = "https://putko-main.vercel.app/api";

export const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
export const user = typeof window !== 'undefined' ? localStorage.getItem("guest") : null;
export const admin = typeof window !== 'undefined' ? localStorage.getItem("admin") : null;
