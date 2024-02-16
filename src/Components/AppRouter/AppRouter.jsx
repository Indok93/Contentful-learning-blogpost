import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
import { Blogs } from "../../Pages/Blogs/Blogs"

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
    </Routes>
  )
}
