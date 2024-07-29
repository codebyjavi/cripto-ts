import { ReactNode } from "react";

export default function ErrroMessage({children} : {children: ReactNode}) {
  return (
    <div>
        {children}
    </div>
  )
}
