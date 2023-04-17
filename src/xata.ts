// Generated by Xata Codegen 0.23.2. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "labels", type: "multiple" },
      { name: "slug", type: "string" },
      { name: "text", type: "text" },
      { name: "author", type: "link", link: { table: "Users" } },
      { name: "createdAt", type: "datetime" },
      { name: "views", type: "int" },
    ],
  },
  {
    name: "Users",
    columns: [
      { name: "name", type: "string" },
      { name: "email", type: "email" },
      { name: "bio", type: "text" },
      { name: "test1", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  Posts: PostsRecord;
  Users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://demo-uni3q8.us-east-1.xata.sh/db/demo1",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
