import Button from "react-bootstrap/Button";
import playIcon from '../../acssets/play-btn.svg'
import editIcon from '../../acssets/pencil.svg'
import deleteIcon from '../../acssets/trash.svg'

const ActionButton=({url , _id}) =>{
    return (
        <>
        <Button className="post-button" href={url} target='_blank'> 
            <img src={playIcon} alt="play" with='32' height='32' />
        </Button>
        <Button className="post-button"> 
            <img src={editIcon} alt="edit" with='24' height='24' />
        </Button>
        <Button className="post-button"> 
            <img src={deleteIcon} alt="delete" with='24' height='24' />
        </Button>
        </>
    )
}
export default ActionButton