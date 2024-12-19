import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function MainLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <Wrapper className="py-4">
        <nav className="mb-16 flex justify-between">
          <Link href="/">erickact.com</Link>
          <div className="flex gap-8">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </nav>
      </Wrapper>

      <main>{children}</main>
    </>
  );
}
