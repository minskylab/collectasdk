import {useEffect} from 'react';
import {useCollectaState, CollectaSurvey} from 'collecta/react'

const Survey: CollectaSurvey  = (props) => {
    const collecta = useCollectaState()
    const [survey, fetching, error] = collecta.loadSurvey(props.id);

    useEffect(() => {
        if (error) {
            console.log(error.kind);
            console.log(error.message);
        }
    }, [error])

    if (fetching) {
        return <div> Loading... </div>
    }

    return <div>
        <header>
            <div>Percent: {survey.percent}</div>
        </header>

        <h2>Due date: {survey.due}</h2>
        <h1>{survey.title}</h1>
        <p>{survey.description}</p>

        <h3>
            {survey.inProgress?
                `Your survey is in progress, hurry up, complete it!`:
                `Start your survey now`}
        </h3>

        <div>
            <button onClick={() => collecta.start(props.id)}>
                {survey.inProgress?"Continue":"Start"}
            </button>
        </div>
    </div>
}

export default Survey;