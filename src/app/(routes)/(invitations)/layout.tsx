import { PropsWithChildren } from "react";

export default function MainLayout(props: PropsWithChildren) {
  const { children } = props;

  return <>{children}</>;
}
