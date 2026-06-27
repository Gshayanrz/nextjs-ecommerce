import { getFetch } from "@/utils/fetch"
import { cookies } from "next/headers"
import PaginateMenu from "./Paginate"

const TableTransactions = async ({ params }) => {
  const token = (await cookies()).get("token")
  const data = await getFetch(`/profile/transactions?${params}`, {
    Authorization: `Bearer ${token.value}`
  })

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="text-center">
            <tr>
              <th>شماره سفارش</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>شماره پیگیری</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <th>{transaction.order_id}</th>
                <th>{Number(transaction.amount).toLocaleString()}تومان</th>
                <td>
                  <span
                    className={
                      transaction.status === "موفق"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {transaction.status}
                  </span>
                </td>
                <td>
                  {transaction.trans_id ? transaction.trans_id : "-"}
                </td>
                <td>{transaction.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginateMenu links={data.meta.links} />
    </>
  )
}

export default TableTransactions
