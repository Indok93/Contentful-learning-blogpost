import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import useContentful from "../../useContentful"
export const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const {getBlogs} = useContentful()

    useEffect(() => {
        getBlogs().then((response) => console.log(response))
    })
  return (
    <ContentWrapper title="Blogs">
        Blogs indsættes her
    </ContentWrapper>
  )
}
