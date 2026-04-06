import { issueRepo } from "../repository/issueRepo";

export const emailWorker = async (event) => {
  const { issueKey } = event.body;

  console.log("Processing issue:", issueKey);

  await issueRepo.markProcessed(issueKey);
};
