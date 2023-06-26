import { Card, CardImgOverlay, CardImg, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    const { id, image, name } = project;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image} alt={name}
                /> 
                <CardImgOverlay>
                <CardTitle>{project.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};
export default ProjectCard;