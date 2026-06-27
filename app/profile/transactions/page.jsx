import LoadingMenu from "@/components/menu/Loading"
import TableTransactions from "@/components/profile/transactions/TableTransactions"
import { Suspense } from "react"

const TransactionsPage = async ({ searchParams }) => {
  const sp = await searchParams
  const params = new URLSearchParams(sp)

  return (
    <Suspense key={params.toString()} fallback={<LoadingMenu />}>
      <TableTransactions params={params.toString()} />
    </Suspense>
  )
}

export default TransactionsPage
