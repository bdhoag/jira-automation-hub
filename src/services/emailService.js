import { logger } from "../utils/logger";

export const emailService = {
  async send(issueKey) {
    logger.info("Sending email for issue", issueKey);

    // TODO: sau này call API thật (SendGrid, etc)

    return true;
  },
};
