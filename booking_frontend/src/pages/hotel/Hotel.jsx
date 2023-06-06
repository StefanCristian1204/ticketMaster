import {useEffect, useState} from 'react';
import Navbar from "../../components/navbar/Navbar.jsx";
import { useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, Carousel, Image} from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {faHashtag, faInfo, faLink, faMap, faMusic, faTag, faTicket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Hotel.css"
import MediaPlayer from "../../components/mediaPlayer/MediaPlayer.jsx";
import LocationMap from "../../components/locationMap/LocationMap.jsx";
import SeatmapModal from "../../components/modals/SeatmapModal.jsx";

const MyComponent = () => {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const  {id} = useParams()
    const [venues,setVenues] = useState({});
    useEffect(() => {
        getHotelById();
    }, []);

const getHotelById = async () =>{
    const data = await axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=nRQZQONjFLeDkVC7lxE0fNvSPCEGw0n3&locale=*`)
    setVenues(data.data)
}
    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div  className="w-100 d-flex justify-content-center" style={{transform:"translateX(100px)"}}>
                <Carousel  className="carouselz w-100">
                {venues._embedded && venues._embedded.attractions.map(el =>
                    (
                        <Carousel.Item className="content text-white mt-2" key={el.id} >
                            <Card className=" content border-dark" style={{ width: "1000px", height:"1000px", transform:"translateX(400px)",backgroundImage: "linear-gradient( #343a40,#0c0c0c)", borderRadius:"25px" }} >
                                <Card.Img variant="top" src={el.images[6].url} style={{borderRadius:"25px"}} className={"w-100 "} />
                                <Card.Body className="m-4">
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text className="d-flex justify-content-between">
                                        <div>
                                        <FontAwesomeIcon className={"text-success"} icon={faTicket}/> {venues.accessibility.ticketLimit}
                                        </div>
                                        <div>
                                        <FontAwesomeIcon  className={"text-success"} icon={faHashtag}/> {el.classifications[0].segment.name}
                                        </div>
                                        <div>
                                        <FontAwesomeIcon className={"text-success"} icon={faTag}/> {el.classifications[0].genre.name}
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className={"text-success"} onClick={() => setModalShow(true)} icon={faTag}/> Seat Map Here
                                        </div>
                                        <SeatmapModal show={modalShow} handleClose={handleClose} seatMap={venues.seatmap.staticUrl}/>
                                    </Card.Text>
                                    <MediaPlayer></MediaPlayer>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    )
                )}
                </Carousel>
            </div>
        </div>
    );
};

export default MyComponent;
