import { Suspense } from "react"

import VerificationForm from "./_components/verification-form"



const Verify = () => {
  return (
    <div>
      <Suspense fallback={null}>
       <VerificationForm/>
      </Suspense>
    </div>
  )
}
export default Verify