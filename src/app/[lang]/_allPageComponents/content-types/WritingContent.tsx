"use client";

import { WritingContentClient } from "@/app/[lang]/_allPageComponents/content-types/WritingContentClient";

export default function WritingContent({ code }: { code: string }) {
  return <WritingContentClient code={code} />;
}