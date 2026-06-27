import LoadingMenu from "@/components/menu/Loading"
import TableOrders from "@/components/profile/orders/TableOrders"
import { Suspense } from "react"

const OrdersPage = async ({ searchParams }) => {
  const sp = await searchParams
  const params = new URLSearchParams(sp)

  return (
    <Suspense key={params.toString()} fallback={<LoadingMenu />}>
      <TableOrders params={params.toString()} />
    </Suspense>
  )
}

export default OrdersPage
