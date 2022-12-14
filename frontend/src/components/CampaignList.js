import { fetchCampaign } from '../http/campaignAPI'
import { useState, useEffect } from 'react'
import { Container, Col, ListGroup, Row, Button, Card} from 'react-bootstrap'
import CreateDonation from './modals/CreateDonation'

function CampaignList() {
    const [donationVisible, setDonationVisible] = useState(false)
    const [campaign, setCampaign] = useState([])
    const [currCampaign, setCurrCampaign] = useState({})
    useEffect(() => {    
      fetchCampaign().then(data => setCampaign([...data]))
    }, [])

    return (   
      <Container>
        <Row className='justify-content-md-center'>   
          <Col md={3}>
            <ListGroup>
              {campaign.map(info => 
                  <Card 
                    className="text-center mt-4"      
                    key={info.alphanumericId}
                  >
                      <Card.Header>{info.status}</Card.Header>
                      <Card.Body>
                        <Card.Title>{info.name}</Card.Title>
                        <Card.Text>
                        {info.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { setDonationVisible(true); setCurrCampaign(info);}}>More details</Button>
                      </Card.Body>
                  </Card>   
              )}
            </ListGroup>
          </Col>
        </Row>

        <CreateDonation show={donationVisible} currCampaign={currCampaign} onHide={() => setDonationVisible(false)}/>

      </Container>    
    );
  }
  
  export default CampaignList;







  