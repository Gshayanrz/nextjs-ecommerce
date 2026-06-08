"use client"

import { useActionState, useEffect } from "react"
import SubmitFormButton from "@/components/SubmitFormButton"
import { toast } from "react-toastify"
import { loginActions } from "@/actions/auth"

const LoginPage = () => {
  const [stateLogin, formActionLogin] = useActionState(loginActions, {})

  useEffect(() => {
    toast(stateLogin?.message, { type: `${stateLogin?.status}` })
  }, [stateLogin])

  return (
    <section className="auth_section book_section">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <div className="form_container">
                  <form action={formActionLogin}>
                    <div className="mb-3">
                      <label className="form-label">شماره موبایل</label>
                      <input
                        name="cellphone"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <SubmitFormButton
                      title="ورود"
                      style="btn btn-primary btn-auth"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
