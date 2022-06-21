import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSIONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`

interface Lesson {
  id: string,
  title: string
}

function App() {

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSIONS_QUERY)

  return (
    <ul>
      {data?.lessons.map((lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
