import { emailService } from "../services/emailService";
import { issueRepo } from "../repository/issueRepo";
import { logger } from "../utils/logger";

export const emailWorker = async (event) => {
  const { issueKey } = event.body;

  try {
    logger.info("Processing email job", issueKey);

    await emailService.send(issueKey);

    await issueRepo.markProcessed(issueKey);

    logger.info("Email sent success", issueKey);
  } catch (err) {
    logger.error("Email job failed", err);

    // optional: mark failed
  }
};
