import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Loading from "../components/Loading"
const Home = lazy(() => import("../pages/Home"))
const NotFound = lazy(() => import("../pages/NotFound"))
const Greet = lazy(() => import("../pages/Greet"))

export default function AppRoutes() {
  return (
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="greet" element={<Greet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
  )
}
