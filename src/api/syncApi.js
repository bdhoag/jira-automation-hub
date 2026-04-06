import { Queue } from "@forge/events";

const queue = new Queue({ key: "email-queue" });

export const syncApi = async (req) => {
  const body = JSON.parse(req.body || "{}");

  if (!body.issueKey) {
    return {
      statusCode: 400,
      body: "Missing issueKey",
    };
  }

  await queue.push({
    body: { issueKey: body.issueKey },
  });

  return {
    statusCode: 200,
    body: "Queued",
  };
};
