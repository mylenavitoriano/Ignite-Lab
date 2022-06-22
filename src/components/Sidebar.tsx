import { Lesson } from "./Lesson";
import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql `
    query MyQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar(){
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    console.log(data)

    return(
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pd-6 mb-6 border-6 border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">

                {data?.lessons.map(lesson => (
                    <Lesson 
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
                ))}
                
            </div>
        </aside>
    )
}