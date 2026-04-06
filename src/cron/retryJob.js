import { issueRepo } from "../repository/issueRepo";

export const retryJob = async () => {
  const failed = await issueRepo.getFailed();

  console.log("Retrying jobs:", failed.length);

  for (const row of failed) {
    console.log("Retry:", row.issue_key);
  }
};
