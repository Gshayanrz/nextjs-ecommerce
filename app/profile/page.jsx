import EditForm from "@/components/profile/info/EditForm"
import { getFetch } from "@/utils/fetch"
import { cookies } from "next/headers"

const ProfilePage = async () => {
  const token = (await cookies()).get("token")
  const data = await getFetch("/profile/info", {
    Authorization: `Bearer ${token.value}`
  })

  return (
    <div className="vh-70">
      <EditForm data={data} />
    </div>
  )
}

export default ProfilePage
