import  {useEffect, useState} from 'react';
import {useCollectaState, CollectaQuestion} from 'collecta/react'


const Question: CollectaQuestion  = (props) => {
    const collecta = useCollectaState()
    const [q, fetching, error] = collecta.loadQuestion(props.id);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        if (error) {
            console.log(error.kind);
            console.log(error.message);
        }
    }, [error])

    if (fetching) {
        return <div>Loading...</div>
    }

    let customInput = <div>Invalid input type</div>;

    if (q.input.kind === "text") {
        customInput = <input type={"text"} value={answers[0]} onChange={(e) => setAnswers([e.target.value])}/>
    } else if (q.input.kind === "boolean") {
        customInput = <select value={answers[0]} onChange={(e) => setAnswers([e.target.value])}>
            <option value="yes">YES</option>
            <option value="no">NO</option>
        </select>
    }

    return <div>

        <h1>{q.title}</h1>
        <p>{q.description}</p>

        <div>
            {customInput}
        </div>

        <div>
            <button onClick={() => collecta.answerQuestion(props.id)}>
                NextQuestion
            </button>
        </div>
    </div>
}

export default Question