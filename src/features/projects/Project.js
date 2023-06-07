const Project = ({project}) => {
    if (project) {
        return (
            <>
            <img
            src={project.image}
            alt={project.name}
            style={{width:'150px'}}
            />
            <div className='m-4'>
                <h5 className='fw-bold'>{project.name}</h5>
                {project.description}
            </div>
            </>
        )
    }
    return null;
}

export default Project;