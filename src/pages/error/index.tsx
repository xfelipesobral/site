import { useParams } from 'react-router-dom'

export default function Error() {
    const { id } = useParams()
    
    return (
        <div>
            <p>teste {id}</p>
        </div>
    )
}