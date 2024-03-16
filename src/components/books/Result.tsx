
import "./../../assets/css/resultbooks.css"
import Heading from "./../../contexts/Heading.tsx"
import ReslutBooks from "./ReslutBooks"

const Result = ({searchResults}) => {
    return (
        <>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Recent Property Listed'
                             subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                    <ReslutBooks searchResults={searchResults}/>
                </div>
            </section>
        </>
)
}

export default Result