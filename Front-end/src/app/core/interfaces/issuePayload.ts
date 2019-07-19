export interface IssuePayload {
    title: string;
    description: string;
    status: string;
    reporterUserId: string;
    reporterName: string;
    priority: string;
    issueType: string;
    estimate: string;
    attachments: Array<string>;
    assigneeUserId: string;
    assigneeName: string;
}
