import { PostContext } from '../context/PostContext'
import { useContext , useEffect } from 'react'
import {AuthContext} from '../context/AuthContext'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Spinner from 'react-bootstrap/Spinner'
import SinglePost from '../components/posts/SinglePost'
import AddPostModal from '../components/posts/AddPostModal'
import addIcon from '../acssets/plus-circle-fill.svg'
const Dashboard = () => {

  const {postState:{posts , postsLoading},getPosts,setShowAddPostModal} = useContext(PostContext)

  const {authState: {user: { username }}} = useContext(AuthContext)

  useEffect(() => getPosts(), [])

  let body =  null 

  if(postsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner variant='info' animation='border'/>
      </div>
    )
  }else if(posts.length === 0) {
    body = (
			<>
				<Card className='text-center mx-5 my-5'>
					<Card.Header as='h1'>Hi {username}</Card.Header>
					<Card.Body>
						<Card.Title>Welcome to LearnIt</Card.Title>
						<Card.Text>
							Click the button below to track your first skill to learn
						</Card.Text>
						<Button
							variant='primary'
						>
							LearnIt!
						</Button>
					</Card.Body>
				</Card>
			</>
		)
  }else {
    body = (
			<>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost post={post} />
						</Col>
					))}
				</Row>
          <OverlayTrigger placement='left' overlay={<Tooltip>Add a new thing to learn</Tooltip>}>
            <Button className='btn-floating' onClick={setShowAddPostModal.bind(this, true)}>
              <img src={addIcon} alt='add-post' width='60' height='60'/>
            </Button>
          </OverlayTrigger>
						
			</>
		)
  }
  return (
    <>
    {body}
    <AddPostModal/>
    </>
  )
}

export default Dashboard