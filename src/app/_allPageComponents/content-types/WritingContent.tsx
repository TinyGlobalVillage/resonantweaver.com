"use client";

import { WritingContentClient } from "@/src/app/_allPageComponents/content-types/WritingContentClient";

export default function WritingContent({ code }: { code: string }) {
  return <WritingContentClient code={code} />;
}