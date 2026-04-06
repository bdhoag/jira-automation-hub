export const logger = {
  info: (msg, data) => {
    console.log(`[INFO] ${msg}`, data || "");
  },

  error: (msg, err) => {
    console.error(`[ERROR] ${msg}`, err);
  },
};
