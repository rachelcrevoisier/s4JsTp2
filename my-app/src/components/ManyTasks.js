import SingleTask from './SingleTask'

const ManyTasks = ({ tasks, onDeleteMany, onModifierMany }) => {
    return (
        <>
            {tasks.map((task) => (
                 <SingleTask key={task.id} task={task}
                    onDelete={onDeleteMany} onModifier={onModifierMany}/>
            ))}
        </>
    );
}

export default ManyTasks