import { Queue } from "@forge/events";
import { issueService } from "../services/issueService";

const queue = new Queue({ key: "email-queue" });

export const issueCreated = async (event) => {
  const issueKey = event.issue.key;

  const shouldProcess = await issueService.handleNewIssue(issueKey);

  if (!shouldProcess) return;

  await queue.push({
    body: { issueKey },
  });
};
