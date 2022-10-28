import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Loading from "../components/Loading"
const Home = lazy(() => import("../pages/Home"))
const NotFound = lazy(() => import("../pages/NotFound"))

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
