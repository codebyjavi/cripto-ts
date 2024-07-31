import { ReactNode } from "react";
import '../index.css'

export default function ErrorMessage({children} : {children: ReactNode}) {
  return (
    <p className="error-message">
        {children}
    </p>
  )
}
