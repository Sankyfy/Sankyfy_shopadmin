import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import { DashboardWrapper } from '../../pages/dashboard/DashboardWrapper'
import { ResetPassword } from './components/ResetPassword'
import { ForgotPass } from '../../pages/ForgotPass/ForgotPass'
import { ContactUs } from '../../pages/Contactus/ContactUs'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      {/* <Route path='registration' element={<Registration />} /> */}
      <Route path='forgot-password' element={<ForgotPass />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='reset_Password/:token' element={<ResetPassword />} />
      <Route index element={<Login />} />
    </Route>
    {/* <Route path="/" element={<DashboardWrapper/>}/> */}
  </Routes>
)

export {AuthPage}
