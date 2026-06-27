import CreateForm from "@/components/profile/addresses/CreateForm"
import EditForm from "@/components/profile/addresses/EditForm"
import { getFetch } from "@/utils/fetch"
import { cookies } from "next/headers"

const AddressesPage = async () => {
  const token = (await cookies()).get("token")
  const { addresses, provinces, cities } = await getFetch(
    "/profile/addresses",
    {
      Authorization: `Bearer ${token.value}`
    }
  )
  
  return (
    <>
      <CreateForm provinces={provinces} cities={cities} />

      <hr />

      {addresses.map((address) => (
        <EditForm
          address={address}
          provinces={provinces}
          cities={cities}
          key={address.id}
        />
      ))}
    </>
  )
}

export default AddressesPage
