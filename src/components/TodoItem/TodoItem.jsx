/* eslint-disable react/prop-types */
import { Button, ListGroup } from "react-bootstrap"

const TodoItem = ( { tarea, fnDelete, fnStatusChange } ) => {
    return (
        <ListGroup.Item className="d-flex gap-2" key={tarea.id} >
                <div className="w-100">
                    {
                        tarea.status ? <del className="text-muted">{tarea.text}</del>
                        : tarea.text
                    }
                </div>
                
                <Button className="btn-success" disabled={tarea.status} size="sm" onClick={() => fnStatusChange(tarea.id)}>

                    <i className="fa-solid fa-check"></i>

                </Button>

                <Button className="btn-danger" size="sm" onClick={() => fnDelete(tarea.id)}>
                    <i className="fa-solid fa-trash"></i>
                </Button>

        </ListGroup.Item>
    )
}

export default TodoItem