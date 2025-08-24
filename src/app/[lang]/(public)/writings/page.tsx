import Link from "next/link";
import { allWritings } from "contentlayer/generated";

export default function WritingsIndex() {
  const posts = [...allWritings].sort((a, b) =>
    (b.date || "").localeCompare(a.date || "")
  );

  return (
    <section>
      <h1>Writings</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/writings/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* 
import WritingsLayout from '../../_allPageComponents/segments/WritingsLayout';

export default function WritingsPage() {
  return (
    <WritingsLayout>
      <div>
        <h2>Welcome to my musings</h2>
        <p>Choose a piece on the left to explore.</p>

        <p>Everything in here is shaped through my lens, my perspectives, my experiences.</p>
        <p>It's perhaps a conqotion of what lives in my mind. Everything in here is made by me.</p>
        <p>This is me trying to give it some structure, and maybe some of it will resonate with you.</p>
        <p>Enter with an open mind. Take what resonates, leave what doesn't.</p>
        <p>Feel free to reach out if there are any questions, or you want to discuss.</p>
      </div>
    </WritingsLayout>
  );
} */