import * as React from "react"
import "../style/main.scss"
import {Button} from '../components/Button'

const NotFoundPage = () => {
  return (
    <main >
      <title>Not found</title>
      <div className='sec-404 align-col-mid'>
        <div className='error-code'>404</div>
        <h1>Oops, page not found</h1>
        <Button type="btn-primary" text="Back to homepage" link="/"/>
      </div>
    </main>
  )
}

export default NotFoundPage
