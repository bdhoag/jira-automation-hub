import { issueRepo } from "../repository/issueRepo";

export const issueService = {
  async handleNewIssue(issueKey) {
    const existing = await issueRepo.findByKey(issueKey);

    if (existing) {
      console.log("Already exists:", issueKey);
      return false;
    }

    await issueRepo.create(issueKey);

    return true;
  },
};
